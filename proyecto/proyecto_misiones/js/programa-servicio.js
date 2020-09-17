'use strict';

const obtener_programas = () => {
    let lista_programas = [];
    if (localStorage.getItem('lista_programas')) {
        lista_programas = JSON.parse(localStorage.getItem('lista_programas'));
    }
    return lista_programas;
};

const buscar_programa = (pnombre) => {
    obtener_programas();
    let programa;
    lista_programas.forEach(obj_programa => {
        if (obj_programa.nombre == pnombre) {
            programa = obj_programa;
        }
    });

    return programa;
};

const modificar_programas = (pprograma) => {
    let lista_programas = obtener_programas();
    lista_programas.forEach((obj_programa, i) => {
        if (obj_programa.nombre == pprograma.nombre) {
            lista_programas.splice(i, 1)
            lista_programas.push(pprograma);
        }
    });

    localStorage.setItem('lista_programas', JSON.stringify(lista_programas));

};

