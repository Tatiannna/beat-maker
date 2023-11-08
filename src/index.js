

const container = document.getElementById("container");
const navBar = document.getElementById("nav");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
nav.appendChild(newTrackButton);


//Track container
const track = document.createElement('div');
track.classList.add("track");
container.appendChild(track);

//Right track div
const trackRight = document.createElement('div');
trackRight.classList.add("track-div-right")
track.appendChild(trackRight);


//Add segments to right track div
const trackUL = document.createElement('ul');
for (let i = 0; i < 8; i++){
    let segment = document.createElement('li');
    segment.classList.add("segment");
    segment.classList.add("off");
    segment.dataset.pos = `${i}`;
    track.appendChild(segment);
}
trackRight.appendChild(trackUL);



// create Left track div
const trackLeft = document.createElement('div');
trackLeft.classList.add("track-div-left");
track.appendChild(trackLeft);

// Add controls to left track div
    let remove = document.createElement('button');
    remove.textContent = 'Remove';
    let mute = document.createElement('button');
    mute.textContent = 'Mute';
    trackLeft.appendChild(remove);
    trackLeft.appendChild(mute);




let segmentState = false;

track.addEventListener("click", (e) =>{

    console.log("segment clicked!")
    // toggle class on/off
    if (segmentState === false){
        e.target.classList.remove("off")
        e.target.classList.add("on")
        segmentState = true;
    }else{
        e.target.classList.remove("on")
        e.target.classList.add("off")
        segmentState = false;
    }
});


newTrackButton.addEventListener("click", (e) =>{

    //Create Track

    let trackUL = document.createElement('ul');
    //trackUL.classList.add("track");

    
    //Add controls
    let remove = document.createElement('button');
    remove.textContent = 'Remove';
    let mute = document.createElement('button');
    mute.textContent = 'Mute';
    track.appendChild(remove);
    track.appendChild(mute);

    //Add segments
    for (let i = 0; i < 8; i++){
        let segment = document.createElement('li');
        segment.classList.add("segment");
        segment.classList.add("off");
        segment.dataset.pos = `${i}`;
        track.appendChild(segment);
    }
    container.appendChild(track);


    //Add listener to track (for segments)

    let segmentState = false;

    track.addEventListener("click", (e) =>{

        console.log("segment clicked!")
        // toggle class on/off
        if (segmentState === false){
            e.target.classList.remove("off");
            e.target.classList.add("on");
            segmentState = true;
        }else{
            e.target.classList.remove("on");
            e.target.classList.add("off");
            segmentState = false;
        }
    });

});

