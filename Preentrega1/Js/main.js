
let bienvenida = prompt("Escribi tu nombre: ").toLowerCase();
alert("Hola DT "+ bienvenida );

let botonElegidos = document.getElementById("botonElegidos");
botonElegidos.addEventListener("click", datosEquipo);

let botonConvocados = document.getElementById("botonConvocados");
botonConvocados.addEventListener("click", traerEquipo);

function datosEquipo() {
    const Jugadores = document.getElementById("Equipo");
    const infoEquipo = {
        Arqueros: document.getElementById("Arqueros").value,
        Defensores: document.getElementById("Defensores").value,
        Mediocampistas: document.getElementById("Mediocampistas").value,
        Mediocampistas2: document.getElementById("Mediocampistas2").value,
        Delanteros: document.getElementById("Delanteros").value,
    }
    if(document.getElementById("Mediocampistas").value === document.getElementById("Mediocampistas2").value){
        alert("Por favor selecciona otro Mediocampista 2")
    }
    
    const datosJson = JSON.stringify(infoEquipo);

    localStorage.setItem("Equipocompleto", datosJson);
    
}

function traerEquipo() {
    const Jugadores = document.getElementById("Equipo");
    const datosJson = localStorage.getItem("Equipocompleto");
    if (datosJson) { 
        const infoEquipo = JSON.parse(datosJson);
        Jugadores["Arqueros"].value = infoEquipo.Arqueros;
        Jugadores["Defensores"].value = infoEquipo.Defensores;
        Jugadores["Mediocampistas"].value = infoEquipo.Mediocampistas;
        Jugadores["Mediocampistas2"].value = infoEquipo.Mediocampistas2;
        Jugadores["Delanteros"].value = infoEquipo.Delanteros;

        const infoEquipoConvocado = document.getElementById("infoEquipoConvocado");
        infoEquipoConvocado.innerHTML = "";

        const infoEquipoLista = document.createElement("ul");

        for (const key in infoEquipo) {
            const listaItem = document.createElement("li");
            listaItem.textContent = `${key}: ${infoEquipo[key]}`;
            infoEquipoLista.appendChild(listaItem);
        }

        infoEquipoConvocado.appendChild(infoEquipoLista);
    } 
       
}
