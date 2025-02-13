function jugar() {
    var jugarDeNuevo = true;

    while (jugarDeNuevo) {
        var numeroComputadora = Math.floor(Math.random() * 9) + 1;
        var numeroUsuario;
        do {
            numeroUsuario = parseInt(prompt("Ingresa un número entre 3 y 6:"));
        } while (isNaN(numeroUsuario) || numeroUsuario < 3 || numeroUsuario > 6);

        var eleccion = prompt("¿Tu número es mayor o menor que el de la computadora? (mayor/menor)").toLowerCase();

        var resultado = "";
        if ((eleccion === "mayor" && numeroUsuario > numeroComputadora) ||
            (eleccion === "menor" && numeroUsuario < numeroComputadora)) {
            resultado = "¡Adivinaste!";
        } else {
            resultado = "Incorrecto, mejor suerte la próxima";
        }

        alert("La computadora eligió " + numeroComputadora + ", tú elegiste " + numeroUsuario + ". " + resultado);


        var respuesta = prompt("¿Quieres jugar otra vez? (SI/NO)").toLowerCase();
        if (respuesta !== "si") {
            jugarDeNuevo = false;
            alert("Christopher Hernández, Carnet: 25009311");
        }
    }
}
jugar();       
    