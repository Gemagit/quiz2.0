let counter = 0;
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
        console.log("counter", counter);
        counter++
        console.log(counter)
        printQuestions(counter)
    })
}
printQuestions(0);
