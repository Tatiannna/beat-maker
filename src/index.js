

const container = document.getElementById("container");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
container.appendChild(newTrackButton);




const track = document.createElement('ul');
track.classList.add("track");

for (let i = 0; i < 8; i++){
    let segment = document.createElement('li');
    segment.classList.add("segment");
    segment.classList.add("off");
    segment.dataset.pos = `${i}`;
    track.appendChild(segment);
}

console.log(container);
container.appendChild(track);



newTrackButton.addEventListener("click", (e) =>{
    //e.preventDefault();
    let track = document.createElement('ul');
    track.classList.add("track");

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