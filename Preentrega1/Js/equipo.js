const equipoFinal = JSON.parse(localStorage.getItem("equipo") || []);

console.log(equipoFinal);

let tabla = document.getElementById("tablabody");

equipoFinal.forEach((element) => {
  tabla.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.posicion}</td>
            <td>${element.nombre}</td>
            <td>${element.pierna}</td>
        </tr>
    `;
});

const agregarBotonListo = () => {
  const contenedorBotonListo = document.getElementById("contenedorBotonListo");
  if (contenedorBotonListo) {
    const botonListo = document.createElement("button");
    botonListo.innerText = "Listo";
    botonListo.addEventListener("click", listoSeleccion);
    contenedorBotonListo.appendChild(botonListo);
  } else {
    console.error("No se encontró el contenedor para el botón listo");
  }
};

const listoSeleccion = () => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Exitos en el torneo",
    showConfirmButton: true,
    timer: 2000,
  });
};

agregarBotonListo();
