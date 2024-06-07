const listaJugadores = "json/dataEquipo.json";

const contenedorJugadores = document.getElementById("mostrarJugadores");
const contenedorBotonReiniciar = document.getElementById(
  "contenedorBotonReiniciar"
);

fetch(listaJugadores)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    mostrarJugadores(datos);
    agregarBotonReiniciar();
  })
  .catch((err) => console.log(err));

function mostrarJugadores(jugadores) {
  jugadores.forEach((jugador) => {
    const card = document.createElement("div");
    card.classList.add(`jugador-card`);
    card.innerHTML = `
                            <div>
                                <h2> ${jugador.nombre}</h2>
                                <h3> ${jugador.posicion}</h3>
                                <p> ${jugador.pierna}</p>
                                <button id="boton${jugador.id}">Elegir Jugador</button>
                            </div>
            `;
    contenedorJugadores.appendChild(card);

    const boton = card.querySelector(`#boton${jugador.id}`);
    boton.addEventListener("click", () => {
      elegirJugador(jugador.id, jugadores);
    });
  });
}

const equipo = [];

const elegirJugador = (id, jugadores) => {
  if (equipo.length >= 5) {
    Toastify({
      text: "No podes seleccionar mas de 5 jugadores",
      duration: 2000,
      destination: "",
      newWindow: true,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
    return;
  }

  const jugador = jugadores.find((jugador) => jugador.id === id);

  if (!jugador) {
    console.error(`Jugador con esa ID ${id} no encontrado`);
    return;
  }
  if (equipo.some((j) => j.id === id)) {
    Toastify({
      text: "Ya seleccionaste a este jugador",
      duration: 1500,
      destination: "",
      newWindow: true,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #1bb3b3, #1b76b3)",
      },
      onClick: function () {},
    }).showToast();
    return;
  }

  equipo.push(jugador);
  localStorage.setItem("equipo", JSON.stringify(equipo));

  Toastify({
    text: "Jugador seleccionado",
    duration: 1500,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #0b35a8ea, #0773c4)",
    },
    onClick: function () {},
  }).showToast();
};

const agregarBotonReiniciar = () => {
  const botonReiniciar = document.createElement("button");
  botonReiniciar.innerText = "Reiniciar Selección";
  botonReiniciar.addEventListener("click", reiniciarSeleccion);
  contenedorBotonReiniciar.appendChild(botonReiniciar);
};

const reiniciarSeleccion = () => {
  equipo.length = 0;
  localStorage.removeItem("equipo");
  console.log("Selección reiniciada");

  Toastify({
    text: "Reiniciaste la selección del equipo",
    duration: 2000,
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #0773c4, #431bb3)",
    },
    onClick: function () {},
  }).showToast();
};
