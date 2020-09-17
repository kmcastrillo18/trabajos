'use strict';
const sct_programas_espaciales = document.querySelector('#sct-card');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let nombre = parametros.get('nombre');
    return nombre;
};

let nombre_programa_espacial = obtener_parametro_url('nombre');

const retornar_programas_espaciales = () => {
    let programas_espaciales = [];

    if (localStorage.getItem('lista_programas')) {
        programas_espaciales = JSON.parse(localStorage.getItem('lista_programas'));
    }

    let programas_espaciales_filtrados = programas_espaciales.filter((obj) => obj.nombre == nombre_programa_espacial);

    if (programas_espaciales_filtrados.length == 0) {
        return programas_espaciales;
    } else {
        return programas_espaciales_filtrados;
    }
};

let programas_espaciales = retornar_programas_espaciales();

const mostrar_programas = (pprogramas_espaciales) => {
    sct_programas_espaciales.innerHTML = '';

    pprogramas_espaciales.forEach(obj => {
        let card_programas = document.createElement('div');
        card_programas.classList.add('card');

        let nombre = document.createElement('h1');
        nombre.classList.add('margin');
        nombre.classList.add('h1');
        nombre.innerText = obj.nombre;

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Ver';
        boton.classList.add('boton');

        card_programas.appendChild(nombre);
        card_programas.appendChild(boton);
        sct_programas_espaciales.appendChild(card_programas);

        boton.addEventListener('click', () => {
            localStorage.setItem('programa_espacial', JSON.stringify(obj));
            window.location.href = `mostrar-programa.html?nombre=${obj.nombre}`;
        });
    });

};

mostrar_programas(programas_espaciales);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let programas_espaciales_filtrados = programas_espaciales.filter((programa) => programa.nombre.toLowerCase().includes(filtro));
    mostrar_programas(programas_espaciales_filtrados);
});