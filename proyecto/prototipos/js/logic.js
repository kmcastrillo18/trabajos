'use strict';

//Crear objetos de la forma prototípica

//Función constructora para pacientes
function Paciente(identificacion, nombre, apellidos, edad, correo, 
    estatura, peso, estado)  {
        this.identificacion = identificacion; //Va a tener un id que va a ser igual a identificación quee vien como parámetro
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.correo = correo;
        this.estatura = estatura;
        this.peso = peso;
        this.estado = estado;
}; 

Paciente.prototype.saludar = function() { 
    console.log(`Hola me llamo ${this.nombre} y mí identificación es ${this.identificacion}
    y me encuentro ${this.estado}`);
}; //Se pueden expandir las capacidades de los pacientes

Paciente.prototype.obtener_imc = function() {
    let imc = 0;
    imc = this.peso / Math.pow(this.estatura, 2);

    return imc;
};

Paciente.prototype.clasificar_imc = function() {
    let imc = this.obtener_imc;
    let clasificación = '';

    if (imc >= 40) {
        clasificación = 'Obesidad III'
    }
    else {
        if (imc >= 35) {
            clasificación = 'Obesidad II';
        }
        else {
            if (imc >= 30) {
                clasificación = 'Obesidad I';
            }
            else {
                if (imc >= 25) {
                    clasificación = 'Sobrepeso'
                }
                else {
                    if (imc >= 18.5) {
                        clasificación = 'Peso Normal';
                    }
                    else {
                        if (imc >= 10) {
                            clasificación = 'Delgadez I';
                        }
                        else {
                            if (imc >= 5) {
                                clasificación = 'Delgadez II';
                            }
                            else {
                                clasificación = 'Delgadez III'
                            }
                        }
                    }
                }
            }
        }
    }

    return clasificación;
};

//Creación de objetos pacientes
let obj_paciente = new Paciente('305240381', 'Katherine', 'Molina Castrillo', '20', 'kmolina@ucenfotec.ac.cr',
1.58, 57,'Saludable');

