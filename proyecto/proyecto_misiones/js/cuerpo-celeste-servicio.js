'use strict';

const obtener_planetas = () => {
    let lista_planetas = [];
    if (localStorage.getItem('listas_planetas')) {
        lista_planetas = JSON.parse(localStorage.getItem('listas_planetas'));
    }
    return lista_planetas;
};

const buscar_planeta = (pnombre) => {
    let lista_planetas = obtener_planetas();
    let planeta;
    lista_planetas.forEach(obj_planeta => {
        if (obj_planeta.nombre == pnombre) {
            planeta = obj_planeta;
        }
    });

    return planeta;
};

const modificar_planetas = (pplaneta) => {
    let lista_planetas = obtener_planetas();
    lista_planetas.forEach((obj_planeta, i) => {
        if (obj_planeta.nombre == pplaneta.nombre) {
            lista_planetas.splice(i, 1);
            lista_planetas.push(pplaneta);
        }
    });

    localStorage.setItem('listas_planetas', JSON.stringify(lista_planetas));

};

const obtener_cuerpos = () => {
    let lista_cuerpos = [];
    if (localStorage.getItem('listas_cuerpos_celestes')) {
        lista_cuerpos = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
    }
    return lista_cuerpos;
};

const buscar_cuerpo = (pnombre) => {
    let lista_cuerpos = obtener_cuerpos();
    let cuerpo;
    lista_cuerpos.forEach(obj_cuerpo => {
        if (obj_cuerpo.nombre == pnombre) {
            cuerpo = obj_cuerpo;
        }
    });

    return cuerpo;
};

const modificar_cuerpos= (pcuerpo) => {
    let lista_cuerpos = obtener_cuerpos();
    lista_cuerpos.forEach((obj_cuerpo, i) => {
        if (obj_cuerpo.nombre == pcuerpo.nombre) {
            lista_cuerpos.splice(i, 1);
            lista_cuerpos.push(pcuerpo);
        }
    });

    localStorage.setItem('listas_cuerpos_celestes', JSON.stringify(lista_cuerpos));

};