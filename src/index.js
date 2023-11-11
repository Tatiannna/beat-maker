import Track from "./track.js";
import Beat from "./beat.js";


const container = document.getElementById("container");
const navBar = document.getElementById("nav");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
nav.appendChild(newTrackButton);

const play = document.createElement('button');
play.textContent = "Play";
nav.appendChild(play);

const tempoPlus = document.createElement('button');
tempoPlus.textContent = "Tempo +";
nav.appendChild(tempoPlus);

const tempoMinus = document.createElement('button');
tempoMinus.textContent = "Tempo -";
nav.appendChild(tempoMinus);



const beat = new Beat(container);

newTrackButton.addEventListener("click", (e) =>{
    beat.addTrack(container);
});

play.addEventListener( "click", (e) =>{
    beat.playAllTracks();
});

tempoMinus.addEventListener( "click", (e) =>{
    beat.changeTempo(-50);
    console.log(beat.tempo);
});

tempoPlus.addEventListener( "click", (e) =>{
    beat.changeTempo(50);
    console.log(beat.tempo);
});