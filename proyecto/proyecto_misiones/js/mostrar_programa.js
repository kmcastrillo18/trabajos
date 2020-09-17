'use strict';

const tbody = document.querySelector('#tbl-programa tbody');
let boton_atras = document.querySelector('#boton_atras');

let programa_espacial = JSON.parse(localStorage.getItem('programa_espacial'));

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let nombre = parametros.get('nombre');
    return nombre;
};

let nombre_programa = obtener_parametro_url('nombre');

const retornar_programa = () => {
    let programas_espaciales;

    if (localStorage.getItem('lista_programas')) {
        programas_espaciales = JSON.parse(localStorage.getItem('lista_programas'));
    }

    let programas_espaciales_filtrados = programas_espaciales.filter((obj) => obj.nombre == nombre_programa);

    if (programas_espaciales_filtrados.length == 0) {
        return programas_espaciales;
    } else {
        return programas_espaciales_filtrados;
    }
};

let programas_espaciales = retornar_programa();

const mostrar_programa = () => {
    tbody.innerHTML = '';
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = programas_espaciales[0].nombre;
    fila.insertCell().innerHTML = programas_espaciales[0].fecha_inicio;
    fila.insertCell().innerHTML = programas_espaciales[0].fecha_final;
    fila.insertCell().innerHTML = programas_espaciales[0].alcance;
    
    programas_espaciales[0].coleccion_misiones.forEach(mision => {
        fila.insertCell().innerHTML = mision.nombre;
    });

    let boton = document.createElement('button');
    boton.type = "button";
    boton.innerText = 'Agregar Misión';
    boton.classList.add('boton2');
    fila.insertCell().appendChild(boton);
    boton.addEventListener('click', () => {
        localStorage.setItem('programa_seleccionado', JSON.stringify(programa_espacial));
        window.location.href = 'registrar-mision.html';
    });

    let boton2 = document.createElement('button');
    boton2.type = "button";
    boton2.innerText = 'Ver Misiones';
    boton2.classList.add('boton2');
    fila.insertCell().appendChild(boton2);
    boton2.addEventListener('click', () => {
        localStorage.setItem('programa_seleccionado', JSON.stringify(programa_espacial));
        window.location.href = 'listar-mision-programa.html';
    });
};

if(programas_espaciales){
    mostrar_programa();
}


boton_atras.addEventListener('click', () => {
    window.location.href = 'listar_programas.html';
});