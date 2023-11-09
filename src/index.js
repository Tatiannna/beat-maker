import Track from "./track.js"


const container = document.getElementById("container");
const navBar = document.getElementById("nav");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
nav.appendChild(newTrackButton);


const track = new Track(container);

newTrackButton.addEventListener("click", (e) =>{
    new Track(container);
});









// //Track container
// const track = document.createElement('div');
// track.classList.add("track");
// container.appendChild(track);


// // create Left track div
// const trackLeft = document.createElement('div');
// trackLeft.classList.add("track-div-left");
// track.appendChild(trackLeft);


// // Add controls to left track div
// let remove = document.createElement('button');
// remove.textContent = 'Remove';
// let mute = document.createElement('button');
// mute.textContent = 'Mute';
// trackLeft.appendChild(remove);
// trackLeft.appendChild(mute);

// remove.addEventListener("click", (e) => {
//     track.remove()
// });

// // Sound selection dropdown menu
// let soundMenu = document.createElement('select');
// let option = document.createElement("option");
// option.textContent = "Select Sound";
// option.setAttribute('selected', true);
// option.setAttribute('disabled', true);
// soundMenu.appendChild(option);

// for(let i = 0; i < 5; i++){
//     let option = document.createElement("option");
//     option.textContent = "option";
//     soundMenu.appendChild(option);
// }
    
// trackLeft.appendChild(soundMenu);




// //Right track div
// const trackRight = document.createElement('div');
// trackRight.classList.add("track-div-right")
// track.appendChild(trackRight);


// //Add segments to right track div
// let trackUL = document.createElement('ul');
// for (let i = 0; i < 8; i++){
//     let segment = document.createElement('li');
//     segment.classList.add("segment");
//     segment.classList.add("off");
//     segment.dataset.pos = `${i}`;
//     trackUL.appendChild(segment);
// }

// trackRight.appendChild(trackUL);


// // toggle segments class on/ off from click
// let segmentState = false;
// trackUL.addEventListener("click", (e) =>{

//     e.stopPropagation();

//     console.log("segment clicked!")
//     // toggle class on/off
//     if (segmentState === false){
//         e.target.classList.remove("off")
//         e.target.classList.add("on")
//         segmentState = true;
//     }else{
//         e.target.classList.remove("on")
//         e.target.classList.add("off")
//         segmentState = false;
//     }
// });


// newTrackButton.addEventListener("click", (e) =>{
//     // //Create Track
//     // let trackUL = document.createElement('ul');
//     // //trackUL.classList.add("track");

    
//     // //Add controls
//     // let remove = document.createElement('button');
//     // remove.textContent = 'Remove';
//     // let mute = document.createElement('button');
//     // mute.textContent = 'Mute';
//     // track.appendChild(remove);
//     // track.appendChild(mute);

//     // //Add segments
//     // for (let i = 0; i < 8; i++){
//     //     let segment = document.createElement('li');
//     //     segment.classList.add("segment");
//     //     segment.classList.add("off");
//     //     segment.dataset.pos = `${i}`;
//     //     track.appendChild(segment);
//     // }
//     // container.appendChild(track);


//     // //Add listener to track (for segments)
//     // let segmentState = false;

//     // trackUL.addEventListener("click", (e) =>{

//     //     console.log("segment clicked!")
//     //     // toggle class on/off
//     //     if (segmentState === false){
//     //         e.target.classList.remove("off");
//     //         e.target.classList.add("on");
//     //         segmentState = true;
//     //     }else{
//     //         e.target.classList.remove("on");
//     //         e.target.classList.add("off");
//     //         segmentState = false;
//     //     }
//     // });



//     //Track container
//     const track = document.createElement('div');
//     track.classList.add("track");
//     container.appendChild(track);


//     // create Left track div
//     const trackLeft = document.createElement('div');
//     trackLeft.classList.add("track-div-left");
//     track.appendChild(trackLeft);

//     // Add controls to left track div
//         let remove = document.createElement('button');
//         remove.textContent = 'Remove';
//         let mute = document.createElement('button');
//         mute.textContent = 'Mute';
//         trackLeft.appendChild(remove);
//         trackLeft.appendChild(mute);
    
//     remove.addEventListener("click", (e) => {
//         track.remove()
//     });


//     //Right track div
//     const trackRight = document.createElement('div');
//     trackRight.classList.add("track-div-right")
//     track.appendChild(trackRight);


//     //Add segments to right track div
//     let trackUL = document.createElement('ul');
//     for (let i = 0; i < 8; i++){
//         let segment = document.createElement('li');
//         segment.classList.add("segment");
//         segment.classList.add("off");
//         segment.dataset.pos = `${i}`;
//         trackUL.appendChild(segment);
//     }

//     trackRight.appendChild(trackUL);
//     // console.log(trackUL.parentElement);


//     // toggle segments class on/ off from click

//     let segmentState = false;
//     trackUL.addEventListener("click", (e) =>{

//         e.stopPropagation();
        
//         console.log("segment clicked!");
//         console.log(e.classList);

//         if (e.classList.contains("off")){
//             e.target.classList.remove("off");
//             e.target.classList.add("on");
//         }else{
//             e.target.classList.remove("pn");
//             e.target.classList.add("off");
//         }
    

//         // toggle class on/off
//         // if (segmentState === false){
//         //     e.target.classList.remove("off")
//         //     e.target.classList.add("on")
//         //     segmentState = true;
//         // }else{
//         //     e.target.classList.remove("on")
//         //     e.target.classList.add("off")
//         //     segmentState = false;
//         // }

//         // if e.classList.includes("on"){

//         // }

//     });
// });



