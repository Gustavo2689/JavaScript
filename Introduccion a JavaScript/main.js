/* var name="Gustavo";
var puntuacion=0;
var record;
record =5000;

var articulos=["BMW", "Mercedez Benz", "VW", "Audi"];


		document.write("<p> La primer marca de autos es: <strong>");
        document.write(articulos[0] + "</strong></p>");
        document.write("<p> La última marca de autos es: <strong>");
        document.write(articulos[articulos.length -1] + "</strong></p>");

        articulos.unshift("Renault");
        document.write("<p> La primer marca de autos ahora es: <strong>");
        document.write(articulos[0] + "</strong></p>");
        articulos.push("Ford");
        document.write("<p> La última marca de autos ahora es: <strong>");
        document.write(articulos[articulos.length-1] + "</strong></p>");

        articulos.push(prompt("Introduce la marca de autos que quieres agregar"));
        document.write("<p>La última marca que agregaste es: <strong>");
        document.write(articulos[articulos.length-1],"</strong></p>");


 */
function square(number) {
    return number * number
}

let students = 256;
console.log(students);

students --;
