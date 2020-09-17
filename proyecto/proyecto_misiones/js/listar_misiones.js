'use strict';
const sct_misiones = document.querySelector('#sct-card');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let nombre = parametros.get('nombre');
    return nombre;
};

let nombre_mision = obtener_parametro_url('nombre');

const retornar_misiones = () => {
    let misiones = [];

    if (localStorage.getItem('lista_misiones')) {
        misiones = JSON.parse(localStorage.getItem('lista_misiones'));
    }

    let misiones_filtradas = misiones.filter((obj) => obj.nombre == nombre_mision);

    if (misiones_filtradas.length == 0) {
        return misiones;
    } else {
        return misiones_filtradas;
    }
};

let misiones = retornar_misiones();

const mostrar_misiones = (pmisiones) => {
    sct_misiones.innerHTML = '';

    pmisiones.forEach(obj => {
        let card_misiones = document.createElement('div');
        card_misiones.classList.add('card');

        let nombre = document.createElement('h1');
        nombre.classList.add('margin');
        nombre.classList.add('h1');
        nombre.innerText = obj.nombre;

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Ver';
        boton.classList.add('boton');

        card_misiones.appendChild(nombre);
        card_misiones.appendChild(boton);
        sct_misiones.appendChild(card_misiones);

        boton.addEventListener('click', () => {
            localStorage.setItem('mision_seleccionada', JSON.stringify(obj));
            window.location.href = `mostrar-mision.html?nombre=${obj.nombre}`;
        });
    });

};

mostrar_misiones(misiones);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let misiones_filtradas = misiones.filter((mision) => mision.nombre.toLowerCase().includes(filtro));
    mostrar_misiones(misiones_filtradas);
});