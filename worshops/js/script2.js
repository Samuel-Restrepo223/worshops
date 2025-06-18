let estudiantes = [
  {nombre: "Samuel", calificaciones: [50,40,45,38]},
  {nombre: "Pepita", calificaciones: [38,20,45,38]},
  {nombre: "Carlos", calificaciones: [38,35,35,34]}
]

estudiantes[0].calificaciones.push(500); // Agregamos 500 para tener algo que eliminar
console.log("Calificaciones de Samuel antes de pop:", estudiantes[0].calificaciones); 


estudiantes[0].calificaciones.pop(); // Esto eliminará el 500

console.log("Calificaciones de Samuel después de pop:", estudiantes[0].calificaciones); 

estudiantes.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
});

console.log("Estudiantes ordenados alfabéticamente:");
console.log(estudiantes); 


const arrayCalificaciones = estudiantes.map(item => item.calificaciones).flat();
const notaMayor = Math.max(...arrayCalificaciones)
console.log("la nota mas alta es:", notaMayor); // nota mas alta
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
console.log("Todas las calificaciones:", todasLasCalificaciones);
console.log("suma de calificaciones:", sumaCalificaciones);
console.log("numero total de calificaciones:", numeroTotalDeCalificaciones )
console.log("promedio:", promedioGeneral); 




