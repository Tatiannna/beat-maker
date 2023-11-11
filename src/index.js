import Track from "./track.js";
import Beat from "./beat.js";


const container = document.getElementById("container");
const navBar = document.getElementById("nav");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
nav.appendChild(newTrackButton);


const beat = new Beat(container);


newTrackButton.addEventListener("click", (e) =>{
    beat.addTrack(container);
});





