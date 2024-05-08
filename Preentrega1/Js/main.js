
let bienvenida = prompt("Escribi tu nombre: ").toLowerCase();
alert("Hola DT "+ bienvenida );

const jugadores = [ 
    "Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4", "Jugador 5",
    "Jugador 6", "Jugador 7", "Jugador 8", "Jugador 9", "Jugador 10",
    "Jugador 11", "Jugador 12", "Jugador 13", "Jugador 14", "Jugador 15"
];
console.log("Estos son los posibles " , jugadores);

let jugadoresSeleccionados = [];

function equipo() {
    while (jugadoresSeleccionados.length < 5) {
        let jugadorElegido = prompt(`Elige un jugador (${5 - jugadoresSeleccionados.length} restantes:)`);
        

        if (!jugadores.includes(jugadorElegido)) {
        alert("Por favor, convoca un jugador de la lista.");
        } else if (jugadoresSeleccionados.includes(jugadorElegido)) {
        alert("Ya elegiste a ese jugador. Por favor, eligí otro.");
        } else {
        jugadoresSeleccionados.push(jugadorElegido);
        }
    }

}
equipo();

// localStorage.setItem("equipo", bienvenida);
// localStorage.setItem("jugadores", JSON.stringify(jugadoresSeleccionados));

console.log("Jugadores seleccionados para el 5 titular:", jugadoresSeleccionados);

document.write("CONVOCATORIA DEL DT " , bienvenida , " ,tus elegidos son: ", jugadoresSeleccionados );

alert("Tus jugadores para el 5 titular son: " + jugadoresSeleccionados);

alert("MUCHA SUERTE EN EL TORNEO DT " + bienvenida + "!!");
