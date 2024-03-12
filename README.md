# 🇯🇵 ANIMANGA quiz2.0 🇯🇵

## Introduction
Os presentamos ANIMANGA quiz2.0, un proyecto en el que demostraremos todo lo que hemos aprendido lo que llevamos de curso. Se trata de un cuestionario divertido con 10 preguntas que apareceran aleatoriamente y como broche final podrás ver tus resultados y compararlos, mediante una gráfica, con el resto de personas que se hayan registrados y hayan hecho uso también de él.
## Table of Contents
1. Mobile First
2. Tecnologies
3. Features
4. Design
5. Colaboration

## 1. Mobile First

Es importante destacar la importancia que tiene hoy en día "mobile-first", la idea con ello es proveer al usuario una buena experiencia para todos los tamaños de pantalla, empezando por una experiencia de usuario que funcione bien para dispositivos pequeños, para posteriormente, basada en dicha experiencia, continuar desarrollando para enriquecer la experiencia de usuario conforme el tamaño de pantalla es mayor.En este caso os mostramos lo bien que se adapta nuestro proyecto a un dispositivo móvil, a un ipad y a un ordenador.

### MOBILE
![mobile](https://github.com/Gemagit/quiz2.0/assets/143506667/3e888ea9-e00d-406c-9b38-bc390955b284)

### IPAD
![ipad](https://github.com/Gemagit/quiz2.0/assets/143506667/c3de51bd-4fe1-4b35-bfc9-0ae6382fb6f5)

### DESKTOP
![desktop](https://github.com/Gemagit/quiz2.0/assets/143506667/fe591e99-7fec-42e1-bb75-18d2e3913682)

## 2. Tecnologies

Las tecnologías usadas en este quiz son las siguientes:
1. HTML
2. CSS
3. JAVASCRIPT
4. GRAPHICS
5. FIREBASE AUTHENTICATION y  FIREBASE STORAGE


## 3. Features

Una de las grandes confusiones respecto de la cultura oriental que tienen quienes no están tan inmersos en ella es creer que el manga y el anime se refieren a la misma expresión cultural. Pero hablamos de dos conceptos diferentes, dos productos distintos que sólo se parecen. El manga es un cómic y el anime es un dibujo animado, y así de fácil deberíamos distinguirlos. Si eres amante de alguna de ellas te encantará responder a las preguntas que hemos planteado. En primer lugar hicimos petición a una [API](https://opentdb.com/) que nos proporcionaron como premisa del proyecto. Para ello hicimos un **fetch** desde Javascript para hacer la solicitud y seguidamente realizamos distintos algoritmos para que el usuario pudiera **seleccionar preguntas** y el fondo cambie de color. También cabe destacar que cuando el usuario no responde y quiere pasar a la siguiente pregunta saltará un **alert**, que informará al usuario de que debe contestar una pregunta antes de pasar a la siguiente. Cuando haya respondido hará **click** en "Siguiente pregunta" y así sucesivamente hasta completar un número de 10 preguntas con sus respectivas respuestas. Al llegar a la pregunta 10, en lugar de "Siguiente pregunta", aparecerá en el botón "Comprueba tus resultados". Este botón te mostrará tu **puntuación** en un cartelito con un mensaje y el **número de aciertos**. Como anexo a esto también se añadirá una **gráfica** con el porcentaje de aciertos con respecto a otros usuarios.


