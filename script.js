let counter = 0;
let correctAnswersCounter = 0;

async function printQuestions(preg) {
    function buttonText() {
        if (counter <= 8) {
            return "Siguiente"
        } else return "Comprueba tus resultados"
    };

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
                    <button>${buttonText()}</button>`


    let response = await fetch("https://opentdb.com/api.php?amount=10&category=31&type=multiple");
    let data = await response.json();

    document.querySelector("#sect1").innerHTML = questionForm; //Pintamos la estructura del <form> en el DOM

    let question = data.results[preg].question;
    let correctAnswer = data.results[preg].correct_answer; // --> La respuesta correcta sigue estando aquí
    let allAnswers = data.results[preg].incorrect_answers; // --> Array con tres elementos
    allAnswers.push(correctAnswer); //Array de 4 elementos con las respuestas

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
                        input.parentElement.style.backgroundColor = "rgba(241, 243, 244, 0.5)";
                    }
                    //y ahora pintamelos claritos si no esta chequeado
                })
        });
    });


    document.querySelector("button").addEventListener("click", function (event) {
        event.preventDefault();
        //Lógica de validación de preguntas y contador de aciertos
        if (document.getElementById("answer0").checked) {
            const markedAnswer = document.getElementById("answer0").value
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        } else if (document.getElementById("answer1").checked) {
            const markedAnswer = document.getElementById("answer1").value
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        } else if (document.getElementById("answer2").checked) {
            const markedAnswer = document.getElementById("answer2").value
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        } else {
            const markedAnswer = document.getElementById("answer3").value
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        }

        //Lógica de respuesta requerida
        let counterRespondidas = 0;
        let arrayInputs = document.querySelectorAll("input")
        arrayInputs.forEach(function (input) {
            if (input.checked) {
                counterRespondidas++
            }
        })
        if (counterRespondidas != 1) {
            alert('Debes seleccionar alguna respuesta')
            return
        }
        counter++
        if (counter <= 9) {
            printQuestions(counter)
        } else {
            printResults()
        }
    })
}
printQuestions(0);

function printResults() {
    document.getElementById("sect1").innerHTML = "";

    let pre = document.createElement("pre");
    let p = document.createElement("p");


    if (correctAnswersCounter <= 5) {
        p.innerHTML = `\n Número de aciertos: ${correctAnswersCounter}. \n El mundo del animanga aún \n  tiene mucho que ofrecerte coleguita\n`;
        pre.setAttribute("id", "preRed");
    } else { //5 aciertos o más
        p.innerHTML = `\n Número de aciertos: ${correctAnswersCounter}. \n ¡Enhorabuena, te nombramos otaku honorífico!\n`;
        pre.setAttribute("id", "preGreen");
    };

    pre.appendChild(p);
    document.getElementById("sect1").appendChild(pre); // dibuja resultado
}

/* let data = {
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
};

let counter = 0;
let correctAnswersCounter = 0;

function printQuestions(preg) {
    function buttonText() {
        if (counter <= 8) {
            return "Siguiente"
        } else return "Comprueba tus resultados"
    };
    //Dibujar estructura del quiz en el DOM
    let questionForm = `<section id="question_container">
                            <legend id="question"></legend>
                            <div id="answers_container">
                                <div class="answer">
                                    <label id="answer0Label" for="answer0"></label>
                                    <input hidden id="answer0" class="clickAnswer" type="radio" name="pregunta" value="" required>
                                </div>
            
                                <div class="answer">
                                    <label id="answer1Label" for="answer1"></label>
                                    <input hidden id="answer1" class="clickAnswer" type="radio" name="pregunta" value="" required>
                                </div>
            
                                <div class="answer">
                                    <label id="answer2Label" for="answer2"></label>
                                    <input hidden id="answer2" class="clickAnswer" type="radio" name="pregunta" value="" required>
                                </div>
            
                                <div class="answer">
                                    <label id="answer3Label" for="answer3"></label>
                                    <input hidden id="answer3" class="clickAnswer" type="radio" name="pregunta" value="" required>
                                </div>
                            </div>
        
                        </section>
                        <button>${buttonText()}</button>`

    document.querySelector("#sect1").innerHTML = questionForm;

    //Obtener las rutas a los elementos a dibujar en el DOM
    let question = data.results[preg].question;
    let correctAnswer = data.results[preg].correct_answer; // --> La respuesta correcta sigue estando aquí
    let allAnswers = data.results[preg].incorrect_answers; // --> Array con tres elementos
    allAnswers.push(correctAnswer);
    let correctArr = correctAnswer.split();
    allAnswers.push(correctArr[preg]); //Array de 4 elementos con las respuestas

    allAnswers.sort(function () { return Math.random() - 0.5 }); //Randomiza los elementos dentro del array

    //Pintar pregunta y respuestas en el DOM
    document.getElementById("answer0").setAttribute("value", allAnswers.shift()); //Al hacerlo sucesivamente impedimos que se repita ninguno de los elementos
    document.getElementById("answer0Label").innerHTML = document.getElementById("answer0").value; //Le dimos como valor al input el elemento extraido del array para después poder comprobar si coincide con correctAnswer o no
    document.getElementById("answer1").setAttribute("value", allAnswers.shift());
    document.getElementById("answer1Label").innerHTML = document.getElementById("answer1").value;
    document.getElementById("answer2").setAttribute("value", allAnswers.shift());
    document.getElementById("answer2Label").innerHTML = document.getElementById("answer2").value;
    document.getElementById("answer3").setAttribute("value", allAnswers.shift()); //Al final el array allAnswers queda vacío
    document.getElementById("answer3Label").innerHTML = document.getElementById("answer3").value;

    document.getElementById("question").innerHTML = question;


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
                        input.parentElement.style.backgroundColor = "grey";
                    } else {
                        input.parentElement.style.backgroundColor = "rgba(241, 243, 244, 0.5)";
                    }
                    //y ahora pintamelos claritos si no esta chequeado
                })
        });
    });


    document.querySelector("button").addEventListener("click", function (event) {
        event.preventDefault();
        //Lógica de validación de preguntas y contador de aciertos
        if (document.getElementById("answer0").checked) {
            const markedAnswer = document.getElementById("answer0").value
            console.log(markedAnswer)
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        } else if (document.getElementById("answer1").checked) {
            const markedAnswer = document.getElementById("answer1").value
            console.log(markedAnswer)
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        } else if (document.getElementById("answer2").checked) {
            const markedAnswer = document.getElementById("answer2").value
            console.log(markedAnswer)
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        } else {
            const markedAnswer = document.getElementById("answer3").value
            console.log(markedAnswer)
            if (correctAnswer == markedAnswer) { correctAnswersCounter += 1 }
        }
        console.log(correctAnswersCounter)

        //Lógica de respuesta requerida
        let counterRespondidas = 0;
        let arrayInputs = document.querySelectorAll("input")
        arrayInputs.forEach(function (input) {
            if (input.checked) {
                counterRespondidas++
            }
        })
        if (counterRespondidas != 1) {
            alert('Debes seleccionar alguna respuesta')
            return 
        }
        counter++
        console.log("Contador de preguntas: " + counter)
        if (counter <= 9) {
            printQuestions(counter)
        } else {
            printResults()
        } 
    })
}
printQuestions(0);

function printResults() {
    document.getElementById("sect1").innerHTML = "";

  

    let pre = document.createElement("pre");
    let p= document.createElement("p");
    

    if (correctAnswersCounter <= 5) {
        p.innerHTML = `\n Número de aciertos: ${correctAnswersCounter}.<br> \n El mundo del animanga aún \n  tiene mucho que ofrecerte coleguita\n`;
        pre.setAttribute("id","preRed");
    } else { //5 aciertos o más
        p.innerHTML= `\n Número de aciertos: ${correctAnswersCounter}.<br> \n ¡¡¡Enhorabuena!!!\n Te nombramos otaku honorífico!\n`;
        pre.setAttribute("id","preGreen");
    };


    pre.appendChild(p);
    document.getElementById("sect1").appendChild(pre); // dibuja resultado
} */




/*/GRÁFICA PIE PORCENTAJE

var data1 = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});
;*/













