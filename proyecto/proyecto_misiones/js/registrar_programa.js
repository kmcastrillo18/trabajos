'use strict';

const txt_nombre = document.querySelector('#txt-nombre');
const txt_fecha_inicio = document.querySelector('#txt-fecha-inicio');
const txt_fecha_final = document.querySelector('#txt-fecha-final');
const txt_alcance = document.querySelector('#txt-alcance');
const btn_registrar_prog = document.querySelector('#btn-registrar-prog');

let lista_programas = obtener_programas();

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

const registrar_programa = () => {
    let error = validar();

    if (error) {
        swal.fire({
            icon: 'warning',
            title: 'No se puede registrar el programa espacial',
            text: 'Por favor rellene los campos resaltados en el formulario'
        });
    }
    else {
       
        let nombre = txt_nombre.value;
        let fecha_inicio = txt_fecha_inicio.value;
        let fecha_final = txt_fecha_final.value;
        let alcance = txt_alcance.value;
        let obj_programa;

        obj_programa = new Programa (nombre, fecha_inicio, fecha_final, alcance);

        lista_programas.push(obj_programa);
        localStorage.setItem('lista_programas', JSON.stringify(lista_programas));
        Swal.fire({
            icon: 'success',
            title: 'El registro se realizó con éxito'
        }).then(() => {
            document.getElementById("formulario").reset();
            window.location.href = 'listar_programas.html';
        });
        
    }
};

btn_registrar_prog.addEventListener('click', registrar_programa);

obtener_programas();