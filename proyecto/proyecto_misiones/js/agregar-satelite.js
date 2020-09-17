'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const input_masa = document.querySelector('#txt-masa');
const input_temperatura = document.querySelector('#txt-temperatura');
const input_duracion_dia = document.querySelector('#txt-duracion-dia');
const input_dist_satelite_cuerpo = document.querySelector('#txt-dist-satelite-cuerpo');
const input_caracteristicas = document.querySelector('#txt-caracteristicas');
const boton = document.querySelector('#btn-guardar');

let lista_satelites = [];
let lista_cuerpos_celeste = [];

if (localStorage.getItem('listas_cuerpos_celestes')) {
    lista_cuerpos_celeste = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
}

if (localStorage.getItem('lista_satelites')) {
    lista_satelites = JSON.parse(localStorage.getItem('lista_satelites'));
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

const registrar_satelite = () => {
    let error = validar();

    if (error) {
        swal.fire({
            icon: 'warning',
            title: 'No se puede registrar el satélite',
            text: 'Por favor rellene los campos resaltados en el formulario'
        });
    } else {
        
        
        let planeta_json = JSON.parse(localStorage.getItem('planeta_seleccionado'));
        let planeta;
        let satelite;

        planeta = new Planeta(planeta_json.nombre, planeta_json.masa, planeta_json.temperatura, planeta_json.duracion_dia, planeta_json.tipo_cuerpo_celeste, planeta_json.distancia_sol, planeta_json.duracion_anno, planeta_json.cant_satelites);

        planeta_json.coleccion_satelites.forEach(satel_json => {
            let satelite = new Satelite(satel_json.nombre, satel_json.masa, satel_json.temperatura, satel_json.duracion_dia, satel_json.tipo_cuerpo_celeste, satel_json.dist_satelite_cuerpo, satel_json.caracteristicas);

            planeta.agregar_satelite(satelite);
        });

        let planeta_seleccionado = [];

        if (localStorage.getItem('planeta_seleccionado')) {
            planeta_seleccionado = JSON.parse(localStorage.getItem('planeta_seleccionado'));
        }

        satelite = new Satelite(input_nombre.value, input_masa.value, input_temperatura.value, input_duracion_dia.value, input_dist_satelite_cuerpo.value, input_caracteristicas.value, planeta_seleccionado.nombre);

        planeta.agregar_satelite(satelite);
        localStorage.setItem('planeta_seleccionado', JSON.stringify(planeta));

        lista_satelites.push(satelite);
        localStorage.setItem('lista_satelites', JSON.stringify(lista_satelites));

        lista_cuerpos_celeste.push(satelite);
        localStorage.setItem('listas_cuerpos_celestes', JSON.stringify(lista_cuerpos_celeste));

        modificar_planetas(planeta);

        Swal.fire({
            icon: 'success',
            title: 'Registro realizado correctamente',
            text: 'Usted registró el satélite de forma correcta'
        }).then(() => {
            document.getElementById("formulario").reset();
            window.location.href = 'listar_cuerpos_celestes.html';
        });
        

    }


};

boton.addEventListener('click', registrar_satelite);