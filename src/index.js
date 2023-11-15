import Track from "./track.js";
import Beat from "./beat.js";
import visualize from "./visualization.js";
import Sound from "./sound.js";


const container = document.getElementById("container");
const navBar = document.getElementById("nav");
const beat = new Beat(container, nav);


// const test = document.createElement('button');
// test.textContent = "TEST RECORD";
// navBar.appendChild(test);

const start = document.createElement('button');
start.textContent = "START RECORD";
navBar.appendChild(start);

start.addEventListener( "click", (e) => {
    Sound.record();
})
    

// const stop = document.createElement('button');
// stop.textContent = "STOP RECORD";
// navBar.appendChild(stop);


// test.addEventListener( "click", (e) => {
//     record();
// })

// const record = function(){
//     const audioContext = new (window.AudioContext || window.webkitAudioContext)();

//     const chunks = [];
//     const mediaRecorder = new MediaRecorder(Sound.mediaStreamDestination.); //.stream
//     console.log("Combined stream:", Sound.combinedStream);
    
//     mediaRecorder.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         chunks.push(event.data);
//       }
//     };
    
//     mediaRecorder.onstop = () => {
//       const audioBlob = new Blob(chunks, { type: 'audio/wav' });
    
//       const audioUrl = URL.createObjectURL(audioBlob);
    
//       // Create a download link
//       const downloadLink = document.createElement('a');
//       downloadLink.href = audioUrl;
//       downloadLink.download = 'user-created-beat.wav';
//       downloadLink.click();

//       // Clean up the blob URL
//         URL.revokeObjectURL(audioUrl);
//     };

//     //Start recording
//     mediaRecorder.start();


//     setTimeout(() => {
//         mediaRecorder.stop();
//       }, 10000);


   
    // stop.addEventListener( "click", (e) => {
    //     mediaRecorder.stop();
    // })
    
      
//}





