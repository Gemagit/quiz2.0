//Aquí recojo todos los inputs y los meto en una variable
const arrayInputs = document.querySelectorAll("input");
//el evento input hace que se produzca un cambio cada vez que el usuario modifique algo, es decir cada vez que cambie el valor
// recorro todos los input 
arrayInputs.forEach(function (input) {
    //le digo que este pendiente cada vez que el usuario haga input
    input.addEventListener("input", function (event) {
        //el evento input se acciona cuando el usuario hace cualquier cambio,cualquier cambio a cualquier valor
        //si checked es false
        arrayInputs.forEach(
            function (input) {
                //recorro de nuevo todos los inputs, los reviso y los pinto de color oscuro si estan checked
                if (input.checked) {
                    input.parentElement.style.backgroundColor = "rgba(241, 243, 244, 0.5)";
                } else {
                    input.parentElement.style.backgroundColor = "white";
                }
                //y ahora pintamelos claritos si no esta chequeado
            })
    });
});






//he accedido al formulario y le he creado el evento preventDefault para que cuando el usuario pulse submit tenga en cuenta una serie de condiciones antes de comprobar los aciertos
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event);
    console.log(event.target.pregunta1);
    const respuesta1 = event.target.pregunta1.value;
    const respuesta2 = event.target.pregunta2.value;
    const respuesta3 = event.target.pregunta3.value;
    const respuesta4 = event.target.pregunta4.value;
    const respuesta5 = event.target.pregunta5.value;



    let aciertos = 0;
    if (respuesta1 === respuestasCorrectas.pregunta1) aciertos++;
    if (respuesta2 === respuestasCorrectas.pregunta2) aciertos++;
    if (respuesta3 === respuestasCorrectas.pregunta3) aciertos++;
    if (respuesta4 === respuestasCorrectas.pregunta4) aciertos++;
    if (respuesta5 === respuestasCorrectas.pregunta5) aciertos++;

    

        if (aciertos <= 3) {
            let emoTriste = "\u{1F61E}";
            alert(`Número de aciertos: ${aciertos}. \n${emoTriste}Por favor, lea la documentación rockera.${emoTriste}`);

        } else { //4 aciertos o más
            let emoRock = "\u{1F918}";
            alert(`Número de aciertos: ${aciertos}. \n${emoRock}¡Enhorabuena, estás hecho un auténtico rockero!${emoRock}`);
            event.target.submit();
        }
});


/*GRÁFICA PIE PORCENTAJE

var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
;*/


