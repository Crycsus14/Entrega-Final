const equipoFinal = JSON.parse(localStorage.getItem('equipo') || []);

console.log(equipoFinal);

let tabla = document.getElementById('tablabody');

equipoFinal.forEach(element => {
    tabla.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.posicion}</td>
            <td>${element.nombre}</td>
            <td>${element.pierna}</td>
        </tr>
    `;
    
});
