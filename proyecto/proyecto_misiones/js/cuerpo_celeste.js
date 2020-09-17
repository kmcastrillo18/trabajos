'use strict';

class Cuerpo_celeste {
    constructor(pnombre, pmasa, ptemperatura, pduracion_dia, ptipo) {
        this.nombre = pnombre;
        this.masa = pmasa;
        this.temperatura = ptemperatura;
        this.duracion_dia = pduracion_dia;
        this.tipo = ptipo;
    };


};

class Estrella extends Cuerpo_celeste {
    constructor(pnombre, pmasa, ptemperatura, pduracion_dia, ptipo, pedad, pcomposicion, pintensidad_luminica, ptamanno){
        super(pnombre, pmasa, ptemperatura, pduracion_dia, ptipo);
        this.edad = pedad;
        this.composicion = pcomposicion;
        this.intensidad_luminica = pintensidad_luminica;
        this.tamanno = ptamanno;
    };
};

class Planeta extends Cuerpo_celeste {
    constructor(pnombre, pmasa, ptemperatura, pduracion_dia, ptipo, pdistancia_sol, pduracion_anno, pcant_satelites){
        super(pnombre, pmasa, ptemperatura, pduracion_dia, ptipo);
        this.distancia_sol = pdistancia_sol;
        this.duracion_anno = pduracion_anno;
        this.cant_satelites = pcant_satelites;
        this.coleccion_satelites = [];
    };

    agregar_satelite = (obj_satelite) => {
        this.coleccion_satelites.push(obj_satelite);
    };
};

class Satelite extends Cuerpo_celeste {
    constructor(pnombre, pmasa, ptemperatura, pduracion_dia, pdista_satelite_cuerpo_orbita, pcaracteristicas, pplaneta_pertenece) {
        super(pnombre, pmasa, ptemperatura, pduracion_dia, 'Satélite');
        this.dista_satelite_cuerpo_orbita = pdista_satelite_cuerpo_orbita;
        this.caracteristicas = pcaracteristicas;
        this.planeta_pertenece = pplaneta_pertenece;
    };
};
