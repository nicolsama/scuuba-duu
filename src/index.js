import Game from './game.js'; 
import './styles/index.scss';
import * as firebase from "firebase/app";
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBsOt6NM1cZ8f4sk95odFm3TuAR6--pzLk",
    authDomain: "scuuba-duu.firebaseapp.com",
    databaseURL: "https://scuuba-duu.firebaseio.com",
    projectId: "scuuba-duu",
    storageBucket: "scuuba-duu.appspot.com",
    messagingSenderId: "465224114343",
    appId: "1:465224114343:web:f97b0e7b19fca1d4f13b82"
};

  firebase.initializeApp(config);
  var database = firebase.database();

// read score data

let highScores; 

  const fetchHighScores = () => {
      database.ref('/scores/').once('value').then(snap => {
          highScores = snap.val();
 
          displayHighScores(highScores);
      });
  };

  fetchHighScores();

// submit username for highscore & send data

window.onload = function () {
    let game = new Game();

    let deepestDivesLink = document.getElementById("dd-link"); 
    let howToPlayLink = document.getElementById("htp-link")

    function xLinkListener() {
        let howToPlay = document.getElementById("htp-container");
        let overlay = document.getElementById("overlay");
        let deepestDives = document.getElementById("dd-container");

        overlay.classList.remove("show");
        overlay.classList.add("hidden");
        howToPlay.classList.add("hidden");
        deepestDives.classList.add("hidden");
    }


    deepestDivesLink.addEventListener("click", (e) => {
        let deepestDives = document.getElementById("dd-container");
        let overlay = document.getElementById("overlay");
        let xLink = document.getElementById("x-link")

        
        deepestDives.classList.toggle("hidden");
        overlay.classList.toggle("show");
        overlay.classList.toggle("hidden");

        xLink.addEventListener("click", xLinkListener)

    });

    howToPlayLink.addEventListener("click", (e) => {
        let howToPlay = document.getElementById("htp-container");
        let overlay = document.getElementById("overlay");
        let xLink = document.getElementById("x-link")

        howToPlay.classList.toggle("hidden");
        overlay.classList.toggle("show");
        overlay.classList.toggle("hidden");
     


        xLink.addEventListener("click", xLinkListener)
    })





    let submitForm = document.getElementById("submit-form");
    submitForm.addEventListener("submit", (e) => {
         e.preventDefault();

        let name = document.getElementById("name").value;
        let score = game.score;

        console.log("Sending Score Data!")

        writeUserData(name, score); 
        fetchHighScores(); 

         let nameInput = document.getElementById("input-username");
         nameInput.classList.add("hidden");
         game.usernameSubmitted = true;
         game.restart();
    });
}

// write user score data to the db

  function writeUserData(name, value) {
      firebase.database().ref('scores/' + name).set({
          name: name,
          value: value,
      });
  }

  // show high Scores

  function displayHighScores(highScores) {
        let highScoreList = document.getElementById("high-scores"); 
        highScoreList.innerHTML = '';
        let scores = ((highScores) ? Object.values(highScores): [])
            .sort( (b, a) => (a.value - b.value))
            .slice(0,10);
        scores.forEach( score => {
            let li = document.createElement("li"); 
            let text = document.createTextNode(`${score.name}: ${score.value}`);
            li.appendChild(text);
            highScoreList.appendChild(li)
        })
  }

//   writeUserData("nikki", 2000);



