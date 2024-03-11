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
            <button type="submit">SIGUIENTE PREGUNTA</button>`

document.querySelector("form").innerHTML = questionForm;

let dataAnswers = JSON.stringify([]);

localStorage.setItem("getDataUsers", dataAnswers);



async function print1stQuestion() {
    let response = await fetch("https://opentdb.com/api.php?amount=1&category=31&difficulty=easy&type=multiple");
    let data = await response.json();
    /* let data = {
        "response_code": 0,
        "results": [
            {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Entertainment: Japanese Anime &amp; Manga",
                "question": "In &quot;To Love-Ru&quot;, Ren and Run are from what planet?",
                "correct_answer": "Memorze",
                "incorrect_answers": [
                    "Deviluke",
                    "Mistletoe",
                    "Okiwana"
                ]
            }
        ]
    }; */
    let question = data.results[0].question;
    let correctAnswer = data.results[0].correct_answer; // --> La respuesta correcta sigue estando aquí
    let allAnswers = data.results[0].incorrect_answers; // --> Array con tres elementos
    let correctArr = correctAnswer.split();
    allAnswers.push(correctArr[0]); //Array de 4 elementos con las respuestas

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
};
print1stQuestion();

document.querySelector("button").addEventListener("click", async function (event) {
    event.preventDefault();
    let response = await fetch("https://opentdb.com/api.php?amount=1&category=31&difficulty=easy&type=multiple");
    let data = await response.json();
    /* let data = {
        "response_code": 0,
        "results": [
            {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Entertainment: Japanese Anime &amp; Manga",
                "question": "In &quot;To Love-Ru&quot;, Ren and Run are from what planet?",
                "correct_answer": "Memorze",
                "incorrect_answers": [
                    "Deviluke",
                    "Mistletoe",
                    "Okiwana"
                ]
            }
        ]
    }; */

    let question = data.results[0].question;
    let correctAnswer = data.results[0].correct_answer; // --> La respuesta correcta sigue estando aquí
    let allAnswers = data.results[0].incorrect_answers; // --> Array con tres elementos
    let correctArr = correctAnswer.split();
    allAnswers.push(correctArr[0]); //Array de 4 elementos con las respuestas

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
*/

