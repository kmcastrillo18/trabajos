'use strict';

const sct_cuerpo_celeste = document.querySelector('#sct-card');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let nombre = parametros.get('nombre');
    return nombre;
};


let nombre_cuerpo_celeste = obtener_parametro_url('nombre');

const retornar_cuerpos_celestes = () => {
    let cuerpos_celestes = [];

    if (localStorage.getItem('listas_cuerpos_celestes')) {
        cuerpos_celestes = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
    }

    let cuerpos_celestes_filtrados = cuerpos_celestes.filter((obj) => obj.nombre == nombre_cuerpo_celeste); 

    if (cuerpos_celestes_filtrados.length == 0) {
        return cuerpos_celestes;
    } else {
        return cuerpos_celestes_filtrados;
    }
};

let cuerpos_celestes = retornar_cuerpos_celestes();

const mostrar_cuerpos_celestes = (pcuerpos_celestes) => {
    sct_cuerpo_celeste.innerHTML = '';

    pcuerpos_celestes.forEach(obj => {
        let card_cuerpos = document.createElement('div');
        card_cuerpos.classList.add('card');

        let nombre = document.createElement('h1');
        nombre.classList.add('margin');
        nombre.classList.add('h1');
        nombre.innerText = obj.nombre;

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Ver';
        boton.classList.add('boton');

        card_cuerpos.appendChild(nombre);
        card_cuerpos.appendChild(boton);
        sct_cuerpo_celeste.appendChild(card_cuerpos);

        boton.addEventListener('click', () => {
            localStorage.setItem('cuerpo_celeste', JSON.stringify(obj));
            window.location.href = `mostrar-cuerpo-celeste.html?nombre=${obj.nombre}`;
        });
    });

};

mostrar_cuerpos_celestes(cuerpos_celestes);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let cuerpos_filtrados = cuerpos_celestes.filter((cuerpo) => cuerpo.nombre.toLowerCase().includes(filtro));
    mostrar_cuerpos_celestes(cuerpos_filtrados);
});