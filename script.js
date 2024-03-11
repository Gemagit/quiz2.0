/* let counter = 0;
console.log(counter)

async function printQuestions(preg) {
    let questionForm = `<section id="question_container">
                        <legend id="question"></legend>
                        <div id="answers_container">
                            <div class="answer">
                                <label id="answer0Label" for="answer0"></label>
                                <input hidden id="answer0" type="radio" name="pregunta" value="" required>
                            </div>
        
                            <div class="answer">
                                <label id="answer1Label" for="answer1"></label>
                                <input hidden id="answer1" type="radio" name="pregunta" value="" required>
                            </div>
        
                            <div class="answer">
                                <label id="answer2Label" for="answer2"></label>
                                <input hidden id="answer2" type="radio" name="pregunta" value="" required>
                            </div>
        
                            <div class="answer">
                                <label id="answer3Label" for="answer3"></label>
                                <input hidden id="answer3" type="radio" name="pregunta" value="" required>
                            </div>
                        </div>
        
                    </section>
                    <button>SIGUIENTE PREGUNTA</button>`
                    
    let response = await fetch("https://opentdb.com/api.php?amount=10&category=31&type=multiple");
    let data = await response.json();

    document.querySelector(".sect1").innerHTML = questionForm; //Pintamos la estructura del <form> en el DOM

    let question = data.results[preg].question;
    console.log("Pregunta: " + question)
    let correctAnswer = data.results[preg].correct_answer; // --> La respuesta correcta sigue estando aquí
    console.log("Respuesta correcta: " + correctAnswer);
    let allAnswers = data.results[preg].incorrect_answers; // --> Array con tres elementos
    console.log("Resto de respuestas: " + allAnswers)
    allAnswers.push(correctAnswer);
    console.log(allAnswers)
   
    let correctArr = correctAnswer.split();
    console.log(correctArr)
    allAnswers.push(correctArr[preg]); //Array de 4 elementos con las respuestas

    allAnswers.sort(function () { return Math.random() - 0.5 }); //Randomiza los elementos dentro del array

    document.getElementById("answer0").setAttribute("value", allAnswers.shift()); //Al hacerlo sucesivamente impedimos que se repita ninguno de los elementos
    document.getElementById("answer0Label").innerHTML = document.getElementById("answer0").value; //Le dimos como valor al input el elemento extraido del array para después poder comprobar si coincide con correctAnswer o no
    document.getElementById("answer1").setAttribute("value", allAnswers.shift());
    document.getElementById("answer1Label").innerHTML = document.getElementById("answer1").value;
    document.getElementById("answer2").setAttribute("value", allAnswers.shift());
    document.getElementById("answer2Label").innerHTML = document.getElementById("answer2").value;
    document.getElementById("answer3").setAttribute("value", allAnswers.shift()); //Al final el array allAnswers queda vacío
    document.getElementById("answer3Label").innerHTML = document.getElementById("answer3").value;

    document.getElementById("question").innerHTML = question;

    document.querySelector("button").addEventListener("click", function (event) {
        event.preventDefault();
        let counterRespondidas = 0;
        let arrayInputs = document.querySelectorAll("input")
        arrayInputs.forEach(function (input) {
            if (input.checked) {
                counterRespondidas++
            }
        })
        console.log("Numero respuestas respondidas: " + counterRespondidas)
        if (counterRespondidas != 1) {
            alert('Debes seleccionar alguna respuesta')
            return
        }
        console.log("counter", counter);
        counter++
        console.log(counter)
        printQuestions(counter)
    })
}
printQuestions(0); */

let data = {
    "response_code": 0,
    "results": [
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "In the &quot;To Love-Ru&quot; series, how many Trans-weapons were created?",
            "correct_answer": "3",
            "incorrect_answers": [
                "1",
                "2",
                "4"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "In &quot;Puella Magi Madoka Magica&quot;, what is the first name of Madoka&#039;s younger brother?",
            "correct_answer": "Tatsuya",
            "incorrect_answers": [
                "Montoya",
                "Tomohisa",
                "Minato"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "What is the name of the final villain in the manga series &quot;Bleach&quot;?",
            "correct_answer": "Yhwach",
            "incorrect_answers": [
                "Juha Bach",
                "Yuhabah",
                "Juhabach"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "In Pok&eacute;mon Chronicles, why was Misty afraid of Gyarados?",
            "correct_answer": "She crawled into it&#039;s mouth as a baby.",
            "incorrect_answers": [
                "She found it scary.",
                "She was badly injured from it.",
                "It is part Bug."
            ]
        },
        {
            "type": "multiple",
            "difficulty": "hard",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "Which person from &quot;JoJo&#039;s Bizarre Adventure&quot; does NOT house a reference to a band, artist, or song earlier than 1980?",
            "correct_answer": "Giorno Giovanna",
            "incorrect_answers": [
                "Josuke Higashikata",
                "Jolyne Cujoh",
                "Johnny Joestar"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "In &quot;To Love-Ru&quot;, who is the first to hear of Yami&#039;s past from her?",
            "correct_answer": "Rito",
            "incorrect_answers": [
                "Mikan",
                "Lala",
                "Haruna"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "In &quot;Highschool DxD&quot;, Koneko Toujou is from what race?",
            "correct_answer": "Nekomata",
            "incorrect_answers": [
                "Kitsune",
                "Human",
                "Kappa"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "In &quot;Toriko&quot;, which of the following foods is knowingly compatible with Toriko?",
            "correct_answer": "Poison Potato",
            "incorrect_answers": [
                "Mors Oil",
                "Alpacookie",
                "Parmesansho Fruit"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "Which part from the JoJo&#039;s Bizarre Adventure manga is about a horse race across America?",
            "correct_answer": "Part 7: Steel Ball Run",
            "incorrect_answers": [
                "Part 6: Stone Ocean",
                "Part 3: Stardust Crusaders",
                "Part 5: Golden Wind"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "hard",
            "category": "Entertainment: Japanese Anime &amp; Manga",
            "question": "Which animation studio produced &quot;Log Horizon&quot;?",
            "correct_answer": "Satelite",
            "incorrect_answers": [
                "Sunrise",
                "Xebec",
                "Production I.G"
            ]
        }
    ]
}

let counter = 0;
console.log(counter)


function printQuestions(preg) {
    let questionForm = `<section id="question_container">
                        <legend id="question"></legend>
                        <div id="answers_container">
                            <div class="answer">
                                <label id="answer0Label" for="answer0"></label>
                                <input hidden id="answer0" type="radio" name="pregunta" value="" required>
                            </div>
        
                            <div class="answer">
                                <label id="answer1Label" for="answer1"></label>
                                <input hidden id="answer1" type="radio" name="pregunta" value="" required>
                            </div>
        
                            <div class="answer">
                                <label id="answer2Label" for="answer2"></label>
                                <input hidden id="answer2" type="radio" name="pregunta" value="" required>
                            </div>
        
                            <div class="answer">
                                <label id="answer3Label" for="answer3"></label>
                                <input hidden id="answer3" type="radio" name="pregunta" value="" required>
                            </div>
                        </div>
        
                    </section>
                    <button>SIGUIENTE PREGUNTA</button>`

    document.querySelector(".sect1").innerHTML=questionForm;

    let question = data.results[preg].question;
    console.log("Pregunta: " + question)
    let correctAnswer = data.results[preg].correct_answer; // --> La respuesta correcta sigue estando aquí
    console.log("Respuesta correcta: " + correctAnswer);
    let allAnswers = data.results[preg].incorrect_answers; // --> Array con tres elementos
    console.log("Resto de respuestas: " + allAnswers)
    allAnswers.push(correctAnswer);
    console.log(allAnswers)
    let correctArr = correctAnswer.split();
    console.log(correctArr)
    allAnswers.push(correctArr[preg]); //Array de 4 elementos con las respuestas

    allAnswers.sort(function () { return Math.random() - 0.5 }); //Randomiza los elementos dentro del array

    document.getElementById("answer0").setAttribute("value", allAnswers.shift()); //Al hacerlo sucesivamente impedimos que se repita ninguno de los elementos
    document.getElementById("answer0Label").innerHTML = document.getElementById("answer0").value; //Le dimos como valor al input el elemento extraido del array para después poder comprobar si coincide con correctAnswer o no
    document.getElementById("answer1").setAttribute("value", allAnswers.shift());
    document.getElementById("answer1Label").innerHTML = document.getElementById("answer1").value;
    document.getElementById("answer2").setAttribute("value", allAnswers.shift());
    document.getElementById("answer2Label").innerHTML = document.getElementById("answer2").value;
    document.getElementById("answer3").setAttribute("value", allAnswers.shift()); //Al final el array allAnswers queda vacío
    document.getElementById("answer3Label").innerHTML = document.getElementById("answer3").value;

    document.getElementById("question").innerHTML = question;

    document.querySelector("button").addEventListener("click", function (event) {
        event.preventDefault();
        let counterRespondidas = 0;
        let arrayInputs = document.querySelectorAll("input")
        arrayInputs.forEach(function (input) {
            if (input.checked) {
                counterRespondidas++
            }
        })
        console.log("Numero respuestas respondidas: " + counterRespondidas)
        if (counterRespondidas != 1) {
            alert('Debes seleccionar alguna respuesta')
            return
        }
        console.log("counter", counter);
        counter++
        console.log(counter)
        printQuestions(counter)
    })
}
printQuestions(0);



//SELECCIONAR CON BOTON LA RESPUESTA ELEGIDA Y CAMBIARLA DE COLOR
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
                    input.parentElement.style.backgroundColor = "black";
                } else {
                    input.parentElement.style.backgroundColor = " rgba(241, 243, 244, 0.5)";
                }
                //y ahora pintamelos claritos si no esta chequeado
            })
    });
});

//AVISO DE RESPUESTAS NO CHEQUEADAS

let submitButton = document.querySelector("button")

submitButton.addEventListener("click", function (event) {
    let counterRespondidas = 0;
    let arrayInputs = document.querySelectorAll("input")
    arrayInputs.forEach(function (input) {
        if (input.checked) {
            counterRespondidas++;
        }
    })
    if (counterRespondidas != 10) {
        alert('Debes seleccionar alguna respuesta')
    }
})

//HACER CONTADOR PARA PREVIAMENTE IMPRIMIR UN <p> (appendchild) y añadirle resultado con mensaje

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
    const respuesta6 = event.target.pregunta1.value;
    const respuesta7 = event.target.pregunta2.value;
    const respuesta8 = event.target.pregunta3.value;
    const respuesta9 = event.target.pregunta4.value;
    const respuesta10 = event.target.pregunta5.value;



    let aciertos = 0;
    if (respuesta1 === respuestasCorrectas.pregunta1) aciertos++;
    if (respuesta2 === respuestasCorrectas.pregunta2) aciertos++;
    if (respuesta3 === respuestasCorrectas.pregunta3) aciertos++;
    if (respuesta4 === respuestasCorrectas.pregunta4) aciertos++;
    if (respuesta5 === respuestasCorrectas.pregunta5) aciertos++;
    if (respuesta6 === respuestasCorrectas.pregunta6) aciertos++;
    if (respuesta7 === respuestasCorrectas.pregunta7) aciertos++;
    if (respuesta8 === respuestasCorrectas.pregunta8) aciertos++;
    if (respuesta9 === respuestasCorrectas.pregunta9) aciertos++;
    if (respuesta10 === respuestasCorrectas.pregunta10) aciertos++;

    let msj = "";


    if (aciertos <= 5) {
        msj += `Número de aciertos: ${aciertos}. \n Por favor, lea la documentación rockera.n`;

    } else { //4 aciertos o más
        msj += `Número de aciertos: ${aciertos}. \n ¡Enhorabuena, estás hecho un auténtico rockero!\n`;
        event.target.submit();
    }

    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    document.getElementsByTagName("form").appendChild(p); // dibuja resultado

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













