'use strict';

const tbody = document.querySelector('#tbl-mision tbody');
let boton_atras = document.querySelector('#boton_atras');

let programa = JSON.parse(localStorage.getItem('programa_seleccionado'));


let lista_misiones = JSON.parse(localStorage.getItem('lista_misiones'));

let coleccion_misiones_programa = programa.coleccion_misiones;

const mostrar_tripulantes = (plista_tripulantes) => {
    let html_tripulantes = '';
    plista_tripulantes.forEach(obj_tripulante => {
        html_tripulantes += '<p>' + obj_tripulante.nombre + '</p>';
    });

    return html_tripulantes;
};

const mostrar_cuerpos = (plista_cuerpos) => {
    let html_cuerpos = '';
    plista_cuerpos.forEach(obj_cuerpo => {
        html_cuerpos += '<p>' + obj_cuerpo.nombre + '</p>';
    });

    return html_cuerpos;
};

const mostrar_misiones = () => {
    coleccion_misiones_programa.forEach(mision_programa => {
        let lista_misiones_programa = lista_misiones.filter((mision) => mision.nombre == mision_programa.nombre);
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_misiones_programa[0].nombre;
        fila.insertCell().innerHTML = lista_misiones_programa[0].fecha_lanzamiento;
        fila.insertCell().innerHTML = lista_misiones_programa[0].duracion;
        fila.insertCell().innerHTML = lista_misiones_programa[0].datos_interes;
        fila.insertCell().innerHTML = lista_misiones_programa[0].resultado;
        fila.insertCell().innerHTML = lista_misiones_programa[0].nave;
        fila.insertCell().innerHTML = mostrar_tripulantes(lista_misiones_programa[0].tripulantes);
        fila.insertCell().innerHTML = mostrar_cuerpos(lista_misiones_programa[0].coleccion_cuerpos_destino);
    });
};

mostrar_misiones();

boton_atras.addEventListener('click', () => {
    window.location.href = 'mostrar-programa.html';
});