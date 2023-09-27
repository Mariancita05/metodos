//-------------------------------------------------------------------NO MODIFICAR 👇-------------------------------------------------------------------//
const alumnos = [
    { nombre: "Juan", apellido: "Pérez", edad: 20, dni: "12345678", examen1: 75, examen2: 80, examen3: 90, trabajoPractico1: true, trabajoPractico2: false, asistencias: 15 },
    { nombre: "María", apellido: "Gómez", edad: 22, dni: "87654321", examen1: 85, examen2: 90, examen3: 95, trabajoPractico1: true, trabajoPractico2: true, asistencias: 24 },
    { nombre: "Leonardo", apellido: "Avila", edad: 25, dni: "876543411", examen1: 82, examen2: 99, examen3: 90, trabajoPractico1: true, trabajoPractico2: true, asistencias: 20 },
    { nombre: "Cecila", apellido: "Herrera", edad: 27, dni: "54424321", examen1: 60, examen2: 85, examen3: 95, trabajoPractico1: true, trabajoPractico2: true, asistencias: 21 },
    { nombre: "Carlos", apellido: "Ramírez", edad: 23, dni: "87482321", examen1: 65, examen2: 80, examen3: 60, trabajoPractico1: false, trabajoPractico2: true, asistencias: 22 },
    { nombre: "Alejandro", apellido: "González", edad: 21, dni: "86634321", examen1: 60, examen2: 60, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 19 },
    { nombre: "Laura", apellido: "Herrera", edad: 24, dni: "87321321", examen1: 100, examen2: 65, examen3: 50, trabajoPractico1: true, trabajoPractico2: true, asistencias: 23 },
    { nombre: "Daniel", apellido: "Silva", edad: 25, dni: "90145321", examen1: 80, examen2: 60, examen3: 60, trabajoPractico1: true, trabajoPractico2: false, asistencias: 10 },
    { nombre: "Ana", apellido: "Martínez", edad: 26, dni: "65214782", examen1: 40, examen2: 60, examen3: 40, trabajoPractico1: true, trabajoPractico2: true, asistencias: 13 },
    { nombre: "Luis", apellido: "Rodríguez", edad: 28, dni: "64896414", examen1: 60, examen2: 80, examen3: 60, trabajoPractico1: false, trabajoPractico2: true, asistencias: 1 },
    { nombre: "María", apellido: "Fernández", edad: 19, dni: "87986541", examen1: 65, examen2: 60, examen3: 100, trabajoPractico1: true, trabajoPractico2: true, asistencias: 24 },
    { nombre: "Juan", apellido: "Morales", edad: 18, dni: "98410321", examen1: 80, examen2: 60, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 14 },
    { nombre: "Paula", apellido: "Gómez", edad: 22, dni: "20231568", examen1: 50, examen2: 100, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 17 },
    { nombre: "Andrés", apellido: "Torres", edad: 30, dni: "79321782", examen1: 60, examen2: 80, examen3: 60, trabajoPractico1: true, trabajoPractico2: true, asistencias: 16 },
];


const bodyTableAlumnos = document.querySelector('#bodyAlumnos') // Obtenemos el cuerpo de la tabla -> donde agregas los datos correspondiente con <td></td>
const headerTable = document.querySelector('#header-table') // Obtenemos la seccion de los titulos de la tabla. Este te servirá para agregar esa 4ta columna en 'Asistencias'
const thridColumn = document.querySelector('#thrid-column') // Obtenemos el titulo de la 3 columna, que debe cambiar según lo que muestre.
let addColumn = false; // Variable que debe cambiar según -> Si existe la 4 columna tiene que tener el valor 'true'. Si no existe en 'false'
//-------------------------------------------------------------------NO MODIFICAR 👆-------------------------------------------------------------------//


// BOTON DATOS ALUMNO => Deberia devolver la tabla de alumnos con los datos personales de cada alumno (nombre, apellido, dni).
const btnDate = () => {
    alumnos.forEach((alumno) => {
        bodyTableAlumnos.innerHTML += `<tr>
        <td>${alumno.nombre}</td>
        <td>${alumno.apellido}</td>
        <td>${alumno.dni}</td>
    </tr>`;
      });
    /* bodyTableAlumnos.
        bodyTable

    body
    innerHTML = ''; // Borrar cualquier dato anterior en la tabla

    alumnos.




        forEach((alumno) => {
            const { nombre, apellido, dni } = alumno; // Extrayendo los datos relevantes



            // Creación de filas de tablas y celdas para cada alumno
            const row = document.createElement('tr');
            const cellNombre = document.createElement('td');
            const cellApellido = document.createElement('td');
            const cellDni = document.createElement('td');



            // Asignación de datos a las celdas de la tabla
            cellNombre.textContent = nombre;
            cellApellido.
                cell
            textContent = apellido;
            cellDni.
                cellDni
            textContent = dni;

            // Agregar celdas a la fila
            row.appendChild(cellNombre);
            row.

                appendChild(cellApellido);
            row.appendChild(cellDni);



            // Agregar la fila al cuerpo de la tabla
            bodyTableAlumnos.appendChild(row);
        }); */
};




// BOTON PROMEDIOS => Deberia devolver la tabla de alumnos con el promedio de cada alumno, este consta en 3 notas (examen1, examen2, examen3).
const btnPromedios = () => {

    alumnos.forEach((alumno) => {
        let sumaPromedios = alumno.examen1 + alumno.examen2 + alumno.examen3;
        let promedio = sumaPromedios / 3;

    bodyTableAlumnos.innerHTML += `<tr>
    <td>${alumno.nombre}</td>
    <td>${alumno.apellido}</td>
    <td>${alumno.dni}</td>
    <td>${promedio}</td>
</tr>`;
});
thridColumn.innerHTML = 'DNI'
headerTable.innerHTML += `<th id="thrid-column">Promedio</th>`
};


    // Función para mostrar la tabla con los promedios de los alumnos
    //function btnPromedios() {


    alumnos.forEach(alumno => {
        const promedio = calculatePromedio(alumno.examen1, alumno.examen2, alumno.examen3);
        alumno.promedio = promedio; //Agregue la propiedad promedio al objeto alumno

        const row = createRow(alumno);
        bodyTableAlumnos.appendChild(row);
    });



// BOTON ASISTENCIAS => Deberia devolver la tabla de alumnos con la cantidad de asistencia de los alumnos sobre el total de 24 clases. (ej: alumno asiste 13 clases. deberia devolver en la columna 13/24).
// Además deberás crear una columna* con el porcentaje de asistencias.
// *la columna se deberá eliminar si se selecciona otro boton
const btnAsistencia = () => {

}


// BOTON APROBADOS => - Deberia devolver la tabla de alumnos en ella solo aquellos que tengan aprobado el cursado, en base a las siguientes condiciones:
// Un promedio ≥ 70 y un porcentaje de asistencia ≥ 70
const btnAprobados = () => {

}


// Deberia devolver la tabla de alumnos con aquellos que no aprobaron el cursado.
const btnReprobados = () => {

}


// AYUDA => esta función te ayudará a eliminar la columna extra que tienes que agregar en 'BOTON ASISTENCIAS'. 
// Para que esta funcione, la columna que agregues debe tener como ID => 'delete'
// NO ES NECESARIO MODIFICAR ESTA FUNCION
const deleteColumn = () => {
    if (addColumn) {
        let column = document.getElementById('delete')
        column.remove()
        addColumn = false;
    }
}


const divPeliculas = document.querySelector('#title')


const getCArds = proyectos.map(obj => {
    divPeliculas.innerHTML += 
    `<div>
        <img src=${obj.img}
            alt="snauser" id="img-proyecto1">
    </div>`
})

/* AGREGAR ELEMENTO */
/* divProyectos.innerHTML += `<h1>Hola mundo! Estoy conectado</h1>` */
const setCards = () => {
    if (divProyectos.style.display === 'none') {
        divProyectos.style.display = 'flex'
    } else {
        divProyectos.style.display = 'none'
    }
}

const btnMC = document.querySelector('#btn-m-c')
btnMC.addEventListener('click', setCards)