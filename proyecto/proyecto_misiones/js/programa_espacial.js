'use strict';

class Programa {
    constructor(nombre, fecha_inicio, fecha_final, alcance, misiones) {
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.alcance = alcance;
        this.coleccion_misiones = [];
    };

    agregar_mision = (obj_mision) => {
        this.coleccion_misiones.push(obj_mision);
    };
};

class Mision {
    constructor(pnombre, pfecha_lanzamiento, pduracion, pdatos_interes, presultado, pnave) {
        this.nombre = pnombre;
        this.fecha_lanzamiento = pfecha_lanzamiento;
        this.duracion = pduracion;
        this.datos_interes = pdatos_interes;
        this.resultado = presultado;
        this.nave = pnave;
        this.tripulantes = [];
        this.coleccion_cuerpos_destino = [];
    };

    agregar_tripulante = (obj_tripulante) => {
        this.tripulantes.push(obj_tripulante);
    };

    agregar_cuerpos_destino = (obj_cuerpo) => {
        this.coleccion_cuerpos_destino.push(obj_cuerpo);
    };
};

class Tripulante {
    constructor(pnombre) {
        this.nombre = pnombre;
    };
};