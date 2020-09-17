'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const boton = document.querySelector('#btn-guardar');

let lista_tripulantes = [];

if (localStorage.getItem('lista_tripulantes')) {
    lista_tripulantes = JSON.parse(localStorage.getItem('lista_tripulantes'));
}


const validar = () => {
    const inputs_requeridos = document.querySelectorAll('[required]');
    let tamano = inputs_requeridos.length;
    let error = false;
    for (let i = 0; i < tamano; i++) {
        //Recorre el arreglo y si algún campo no se ha llenado lo marca en rojo
        if (inputs_requeridos[i].value == '') {
            error = true; //Error es true si el campo está vacío
            inputs_requeridos[i].classList.add('input_error'); //Clase que viene desde el css
        }
        //Si el campo ya se llenó desmarca el campo en rojo
        else {
            inputs_requeridos[i].classList.remove('input_error');
        }
    }
    return error;
};

const registrar_tripulante = () => {
    let error = validar();

    if (error) {
        swal.fire({
            icon: 'warning',
            title: 'No se puede registrar el tripulante',
            text: 'Por favor rellene los campos resaltados en el formulario'
        });
    } else {
        let mision_json = JSON.parse(localStorage.getItem('mision_seleccionada'));
        let mision;
        let tripulante;

        mision = new Mision(mision_json.nombre, mision_json.fecha_lanzamiento, mision_json.duracion, mision_json.datos_interes, mision_json.resultado, mision_json.nave);

        mision_json.coleccion_cuerpos_destino.forEach(obj_cuerpo => {
            if (obj_cuerpo.tipo == 'Planeta') {
                let planeta = new Planeta(obj_cuerpo.nombre, obj_cuerpo.masa, obj_cuerpo.temperatura, obj_cuerpo.duracion_dia, obj_cuerpo.tipo, obj_cuerpo.distancia_sol, obj_cuerpo.duracion_anno, obj_cuerpo.cant_satelites);
                mision.agregar_cuerpos_destino(planeta);
            }

            if (obj_cuerpo.tipo == 'Estrella') {
                let estrella = new Estrella(obj_cuerpo.nombre, obj_cuerpo.masa, obj_cuerpo.temperatura, obj_cuerpo.duracion_dia, obj_cuerpo.tipo, obj_cuerpo.edad, obj_cuerpo.composicion, obj_cuerpo.intensidad_lumi, obj_cuerpo.tamanno);
                mision.agregar_cuerpos_destino(estrella);
            }

            if (obj_cuerpo.tipo == 'Satélite') {
                let satelite = new Satelite(obj_cuerpo.nombre, obj_cuerpo.masa, obj_cuerpo.temperatura, obj_cuerpo.duracion_dia, obj_cuerpo.tipo, obj_cuerpo.dist_satelite_cuerpo, obj_cuerpo.caracteristicas);
                mision.agregar_cuerpos_destino(satelite);
            }

        });

        mision_json.tripulantes.forEach(tripulante_json => {
            let tripulante = new Tripulante(tripulante_json.nombre);
            mision.agregar_tripulante(tripulante);
        });

        tripulante = new Tripulante(input_nombre.value);

        mision.agregar_tripulante(tripulante);
        localStorage.setItem('mision_seleccionada', JSON.stringify(mision));

        lista_tripulantes.push(tripulante);
        localStorage.setItem('lista_tripulantes', JSON.stringify(lista_tripulantes));

        modificar_misiones(mision);
        Swal.fire({
            icon: 'success',
            title: 'El registro se realizó con éxito'
        }).then(() => {
            document.getElementById("formulario").reset();
            window.location.href = 'listar-misiones.html';
        });
    }
};

boton.addEventListener('click', registrar_tripulante);