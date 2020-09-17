'use strict';

const tbody = document.querySelector('#tbl-planetas tbody');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');

let lista_planetas = obtener_planetas();

const mostrar_satelites = (plista_satelites) =>{
    let html_satelites = '';
    plista_satelites.forEach(obj_satelite => {
        html_satelites += '<p>' + obj_satelite.nombre + '</p>';
    });

    return html_satelites;
};

const mostrar_planetas = (plista_planetas) => {
    tbody.innerHTML = '';
    plista_planetas.forEach(obj_planeta => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = obj_planeta.nombre;
        fila.insertCell().innerHTML = obj_planeta.masa;
        fila.insertCell().innerHTML = obj_planeta.temperatura;
        fila.insertCell().innerHTML = obj_planeta.duracion_dia;
        fila.insertCell().innerHTML = obj_planeta.distancia_sol;
        fila.insertCell().innerHTML = obj_planeta.duracion_anno;
        fila.insertCell().innerHTML = obj_planeta.cant_satelites;
        fila.insertCell().innerHTML = mostrar_satelites(obj_planeta.coleccion_satelites);

        let boton = document.createElement('button');
        boton.type = "button";
        boton.innerText = 'Agregar Satelite';
        boton.classList.add('boton2');
        fila.insertCell().appendChild(boton);
        boton.addEventListener('click', () => {
            localStorage.setItem('planeta_seleccionado', JSON.stringify(obj_planeta));
            window.location.href = 'registrar-satelite.html';
        });

        let boton2 = document.createElement('button');
        boton2.type = "button";
        boton2.innerText = 'Ver misiones';
        boton2.classList.add('boton2');
        fila.insertCell().appendChild(boton2);
    
        boton2.addEventListener('click', () => {
            localStorage.setItem('cuerpo_celeste_seleccionado', JSON.stringify(obj_planeta.nombre));
            window.location.href = 'listar_misiones_cuerpo.html';
        });
    });
};

mostrar_planetas(lista_planetas);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let planetas_filtrados = lista_planetas.filter((planeta) => planeta.nombre.toLowerCase().includes(filtro));
    mostrar_planetas(planetas_filtrados);
});