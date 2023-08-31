/* ------------------------------------ */
/* --- Exercice 1 --- */

// function toggleNoDisplay() {
//     document.querySelector('#ex1 .text').classList.toggle('hidden');
// }

// document.querySelector('#ex1 .button').addEventListener('click', toggleNoDisplay);

const button1 = document.querySelector("#ex1 .button");
const text1 = document.querySelector("#ex1 .text");

button1.addEventListener("click", function () {
  text1.classList.toggle("hidden");
});

/* ------------------------------------ */
/* --- Exercice 2 --- */
//y est le nombre de pixels verticaux défilés.

const text2 = document.querySelector("#exo2.text");
const y = window.scrollY("#ex2-scroll-value");

if (window.scroll) {
  y.window.scroll(0, 0); // reset the scroll position to the top left of the document.
}


document.getElementById("ex2-scroll-value").innerHTML = document.y.scrollTop;



/* ------------------------------------ */
/* --- Exercice 3 --- */

const animals = document.getElementById("ex3-animals");
document.querySelector(".button").addEventListener("click", function() {
  
  animals.appendChild(animals.firstElementChild);
});

/* ------------------------------------ */
/* --- Exercice 4 --- */

const button = document.querySelector("ex3.button");
button.addEventListener("click", function changeColor()
 {
 
  if (button.style.backgroundColor === "blue") {
    button.style.backgroundColor = "red";
  } else if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "blue";
  }
  console.log("click");
})

/* ------------------------------------ */
/* --- Exercice 5 --- */

/* ------------------------------------ */
/* --- Exercice 6 --- */

/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
  "🥖 Acheter du pain",
  "🗑️ Descendre la poubelle",
  "🐶 Sortir le chien",
  "🍽️ Faire la vaisselle",
  "🧹 Passer l'aspirateur",
  "🌳 Tondre la pelouse",
];

/* ------------------------------------ */
/* --- Exercice 8 --- */
