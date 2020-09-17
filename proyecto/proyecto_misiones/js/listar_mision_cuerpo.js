'use strict';

const tbody = document.querySelector('#tbl-mision tbody');
let boton_atras = document.querySelector('#boton_atras');

let cuerpo_celeste = JSON.parse(localStorage.getItem('cuerpo_celeste_seleccionado'));

let lista_misiones = JSON.parse(localStorage.getItem('lista_misiones'));

const obtener_misiones_cuerpo = () => {
    let lista_misiones_cuerpo = [];

    lista_misiones.forEach(obj_mision => {
        obj_mision.coleccion_cuerpos_destino.forEach(obj_cuerpo_destino => {
            if(obj_cuerpo_destino.nombre == cuerpo_celeste){
                lista_misiones_cuerpo.push(obj_mision);
            }
        });
    });

    return lista_misiones_cuerpo;
};

const mostrar_tripulantes = (plista_tripulantes) => {
    let html_tripulantes = '';
    plista_tripulantes.forEach(obj_tripulante => {
        html_tripulantes += '<p>' + obj_tripulante.nombre + '</p>';
    });

    return html_tripulantes;
};

const mostrar_misiones = () => {
    let misiones = obtener_misiones_cuerpo();
    misiones.forEach(mision_cuerpo => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = mision_cuerpo.nombre;
        fila.insertCell().innerHTML = mision_cuerpo.fecha_lanzamiento;
        fila.insertCell().innerHTML = mision_cuerpo.duracion;
        fila.insertCell().innerHTML = mision_cuerpo.datos_interes;
        fila.insertCell().innerHTML = mision_cuerpo.resultado;
        fila.insertCell().innerHTML = mision_cuerpo.nave;
        fila.insertCell().innerHTML = mostrar_tripulantes(mision_cuerpo.tripulantes);
    });
};

mostrar_misiones();

boton_atras.addEventListener('click', () => {
    window.location.href = 'mostrar-programa.html';
});