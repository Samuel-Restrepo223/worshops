'use strict';
let estudiantes = [
  {nombre: "Samuel", calificaciones: [50,40,45,38]},
  {nombre: "Pepita", calificaciones: [38,20,45,38]},
  {nombre: "Carlos", calificaciones: [38,35,35,34]}
]

/* estudiantes.forEach(mostrarEstudiantes =>{
  console.log("lista de estudiantes y sus calificaciones:", mostrarEstudiantes);
 // se muestran a los estudiantes por consola
});
console.log("-------------")

estudiantes[0].calificaciones.push(500); // Agregamos 500 para tener algo que eliminar
console.log("Calificaciones de Samuel antes de pop:", estudiantes[0].calificaciones); 

console.log("-------")


estudiantes[0].calificaciones.pop(); // Esto eliminará el 500

console.log("Calificaciones de Samuel después de pop:", estudiantes[0].calificaciones); 

console.log("---------")

estudiantes.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
});// orden alfabetico

console.log("Estudiantes ordenados alfabéticamente:");
console.log(estudiantes); 

console.log("-------");


const arrayCalificaciones = estudiantes.map(item => item.calificaciones).flat();
const notaMayor = Math.max(...arrayCalificaciones)
console.log("la nota mas alta es:", notaMayor); // nota mas alta

console.log("-----");


 //promedio
const todasLasCalificaciones = estudiantes.flatMap(estudiante => estudiante.calificaciones);

const sumaCalificaciones = todasLasCalificaciones.reduce((suma, calificacionActual)=>{
    return suma + calificacionActual;
}, 0);

const numeroTotalDeCalificaciones = todasLasCalificaciones.length;

let promedioGeneral = 0;
if(numeroTotalDeCalificaciones > 0){
    promedioGeneral = sumaCalificaciones/ numeroTotalDeCalificaciones;
}
console.log("promedio:", promedioGeneral); 

console.log("------");


const promedioEstudiantes = estudiantes.filter(estudiante =>{
  const sumaCalificacionesE = estudiante.calificaciones.reduce((acc, cal)=> acc + cal, 0);

  const numeroCalificacionesEstudiante = estudiante.calificaciones.length;
  let promedioEstudiante = 0;
  if(numeroCalificacionesEstudiante > 0){
    promedioEstudiante = sumaCalificaciones / numeroCalificacionesEstudiante;
  }
  
  return promedioEstudiante >= promedioGeneral;
})

console.log("estudiantes con calificacion igual o mayor al promedio", promedioEstudiantes);

console.log("-----"); */

function gestionCalificaciones() {
  const nombreDelEstudiante = prompt("Ingrese el nombre del estudiante:"); // Obtener la entrada del usuario

  // Encontrar al estudiante por nombre
  const estudianteEncontrado = estudiantes.find(estudiante => estudiante.nombre.toLowerCase() === nombreDelEstudiante.toLowerCase());

  if (estudianteEncontrado) {
    console.log(`Calificaciones de ${estudianteEncontrado.nombre}:`, estudianteEncontrado.calificaciones);

    // Calcular el promedio del estudiante encontrado
    const sumaCalificacionesEstudiante = estudianteEncontrado.calificaciones.reduce((acc, cal) => acc + cal, 0);
    const promedioEstudianteIndividual = sumaCalificacionesEstudiante / estudianteEncontrado.calificaciones.length;

    console.log(`Promedio de ${estudianteEncontrado.nombre}:`, promedioEstudianteIndividual.toFixed(2)); // Mostrar promedio con 2 decimales
  } else {
    console.log(`Estudiante "${nombreDelEstudiante}" no encontrado.`);
  }
  const arrayCalificaciones = estudiantes.map(item => item.calificaciones).flat();

// Calcular la nota más alta
const notaMasAlta = Math.max(...arrayCalificaciones);

// Calcular la nota más baja
const notaMasBaja = Math.min(...arrayCalificaciones);

console.log("La nota mas alta es:", notaMasAlta);
console.log("La nota mas baja es:", notaMasBaja);

  
}
gestionCalificaciones();

