'use strict';

const obtener_misiones = () => {
    let lista_misiones = [];
    if (localStorage.getItem('lista_misiones')) {
        lista_misiones = JSON.parse(localStorage.getItem('lista_misiones'));
    }
    return lista_misiones;
};

const buscar_mision = (pnombre) => {
    obtener_misiones();
    let mision;
    lista_misiones.forEach(obj_mision => {
        if (obj_mision.nombre == pnombre) {
            mision = obj_mision;
        }
    });

    return mision;
};

const modificar_misiones = (pmision) => {
    let lista_misiones = obtener_misiones();
    lista_misiones.forEach((obj_mision, i) => {
        if (obj_mision.nombre == pmision.nombre) {
            lista_misiones.splice(i, 1);
            lista_misiones.push(pmision);
        }
    });

    localStorage.setItem('lista_misiones', JSON.stringify(lista_misiones));

};

