class Usuario {
    constructor(nombre, apellido, correo, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.direccion = direccion; // Objeto direccion que heredara la clase Usuario
        this.clave='Galileo';
    }
    
    imprimirInformacionCompleta() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Correo: ${this.correo}`);
        console.log(`Dirección: ${this.direccion.calle} ${this.direccion.numero}, ${this.direccion.municipio}`);
    }



    recuperarClave() {
        if (this.clave=='Galileo') {
            console.log(`Clave correcta!`);
        } else {
            console.log('El usuario aún no ha establecido una clave.');
        }
    }
    


}

class Direccion {
    constructor(calle, numero, municipio) {
    
        this.numero = numero;
        this.municipio = municipio;
    }

}


let direccion1 = new Direccion("4de Febrero", 456, "Guatemala");
let usuario1 = new Usuario(Juan, "Perez", "juan@gmail.com", direccion1);



let usuarios = [
    new Usuario("Mario", "Perez", "marioperez@gmail.com", new Direccion("Calle 1", 3, "Guatemala")),
    new Usuario("María", "López", "marialopez@gmail.com", new Direccion("Calle 2", 46, "Sanarate")),
    new Usuario("Jose", "Manzare", "josemanz@outlook.com", new Direccion("Calle 3", 70, "Tikal")),
    new Usuario("Ana", "alvarado", "analvarado@hotmail.com", new Direccion("Calle 4", 78, "Puerto Barrios")),
    new Usuario("Luis", "Rodríguez", "luis@example.com", new Direccion("Calle 5", 35, "Guatemala")),
    new Usuario("Cesar", "Ixcayau", "mylove@gmail.com", new Direccion("Calle 6", 84, "Izabal"))
];