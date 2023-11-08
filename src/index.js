

const container = document.getElementById("container");
const navBar = document.getElementById("nav");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
nav.appendChild(newTrackButton);


const track = document.createElement('ul');
track.classList.add("track");

// Add controls
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





newTrackButton.addEventListener("click", (e) =>{
    //e.preventDefault();
    let track = document.createElement('ul');
    track.classList.add("track");

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

    console.log(container);
    container.appendChild(track);
});