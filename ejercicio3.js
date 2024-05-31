let usuario = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    DPI: "268339481518",
    direccion:"24 calle 29-66 zona 9",

    cambiarDireccion: function(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log("La dirección ha sido cambiada a: " + this.direccion);
    }
};



// la direccion se cambia asi

usuario.cambiarDireccion( "nueva direccion aqui toda junta");


console.log(usuario.direccion);