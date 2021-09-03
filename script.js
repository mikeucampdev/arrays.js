var arreglo = [1, 'cadena d texto', [1,2,3, 'Cadena'],true,false];
console.log (arreglo);

function promedio (calificaciones){
    console.log (calificaciones);
    /*console.log(calificaciones.length);*/

    console.log (calificaciones [3])
}

promedio ([70,80,100,50]);
promedio ([70,80,100,50,60,10]);
promedio ([70,80,100,50],60,50,100);


/*ITERACIONES*/
console.log('ForOF');
for ( var elemento of arreglo) {
    console.log(elemento)
}

console.log(arreglo)

//FOR EACH

console.log ('for each');

arreglo.forEach(function(elemento,indice){
    if (indice==2){
        console.log('El indicie 2 contiene : '+ elemento);
    } else {
    console.log (elemento, indice);
    }
});
