
const listaJugadores = 'json/dataEquipo.json';

const contenedorJugadores = document.getElementById('mostrarJugadores');
const contenedorBotonReiniciar = document.getElementById('contenedorBotonReiniciar');

fetch(listaJugadores)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        mostrarJugadores(datos);
        agregarBotonReiniciar();
    })
    .catch((err) => console.log(err));

    function mostrarJugadores(jugadores) {
        jugadores.forEach((jugador)=>{
            const card = document.createElement('div');
            card.innerHTML = `
                            <div>
                                <h2> ${jugador.nombre}</h2>
                                <h3> ${jugador.posicion}</h3>
                                <p> ${jugador.pierna}</p>
                                <button id="boton${jugador.id}">Elegir Jugador</button>
                            </div>
            `;
            contenedorJugadores.appendChild(card);

            const boton = document.getElementById(`boton${jugador.id}`);
            boton.addEventListener("click", () => {
                elegirJugador(jugador.id, jugadores);
            });
        });
    }

    const equipo = [];

    const elegirJugador = (id, jugadores) => {
        if (equipo.length >= 5) {
            alert('No puedes elegir más de 5 jugadores.');
            return;
        }

        const jugador = jugadores.find((jugador) => jugador.id === id)

        if (!jugador) {
            console.error(`Jugador con esa ID ${id} no encontrado`);
            return;
        }
        if (equipo.some((j) => j.id === id)) {
            alert('Este jugador ya está en el equipo.');
            return;
        }

        equipo.push(jugador);
        localStorage.setItem("equipo", JSON.stringify(equipo))
    };

    const agregarBotonReiniciar = () => {
        const botonReiniciar = document.createElement('button');
        botonReiniciar.innerText = 'Reiniciar Selección';
        botonReiniciar.addEventListener('click', reiniciarSeleccion);
        contenedorBotonReiniciar.appendChild(botonReiniciar);
    };
    
    const reiniciarSeleccion = () => {
        equipo.length = 0;
        localStorage.removeItem('equipo'); 
        console.log('Selección reiniciada');
        alert('Has reiniciado la selección de jugadores.');
    };
// let botonElegidos = document.getElementById("botonElegidos");
// botonElegidos.addEventListener("click", datosEquipo);

// let botonConvocados = document.getElementById("botonConvocados");
// botonConvocados.addEventListener("click", traerEquipo);

// function datosEquipo() {
//     const Jugadores = document.getElementById("Equipo");
//     const infoEquipo = {
//         Arqueros: document.getElementById("Arqueros").value,
//         Defensores: document.getElementById("Defensores").value,
//         Mediocampistas: document.getElementById("Mediocampistas").value,
//         Mediocampistas2: document.getElementById("Mediocampistas2").value,
//         Delanteros: document.getElementById("Delanteros").value,
//     }
//         if(document.getElementById("Mediocampistas").value === document.getElementById("Mediocampistas2").value){
//         alert("Por favor selecciona otro Mediocampista 2")
//         }
    
//     const datosJson = JSON.stringify(infoEquipo);

//     localStorage.setItem("Equipocompleto", datosJson);
    
// }

// function traerEquipo() {
//     const Jugadores = document.getElementById("Equipo");
//     const datosJson = localStorage.getItem("Equipocompleto");
//     if (datosJson) { 
//         const infoEquipo = JSON.parse(datosJson);
//         Jugadores["Arqueros"].value = infoEquipo.Arqueros;
//         Jugadores["Defensores"].value = infoEquipo.Defensores;
//         Jugadores["Mediocampistas"].value = infoEquipo.Mediocampistas;
//         Jugadores["Mediocampistas2"].value = infoEquipo.Mediocampistas2;
//         Jugadores["Delanteros"].value = infoEquipo.Delanteros;

//         const infoEquipoConvocado = document.getElementById("infoEquipoConvocado");
//         infoEquipoConvocado.innerHTML = "";

//         const infoEquipoLista = document.createElement("ul");

//         for (const key in infoEquipo) {
//             const listaItem = document.createElement("li");
//             listaItem.textContent = `${key}: ${infoEquipo[key]}`;
//             infoEquipoLista.appendChild(listaItem);
//         }

//         infoEquipoConvocado.appendChild(infoEquipoLista);
//     } 
       
// }
