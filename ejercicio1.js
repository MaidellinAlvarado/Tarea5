class Usuario {
    constructor(nombre, apellido, correo, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion; // Objeto direccion que heredara la clase Usuario
    }

    
}

class Direccion {
    constructor(calle, numero, municipio) {
        this.calle = calle;
        this.numero = numero;
        this.municipio = municipio;
    }

}


let direccion1 = new Direccion("Calle 123", 456, "Ciudad ABC");
let usuario1 = new Usuario("Juan", "Perez", "juan@example.com", direccion1);


