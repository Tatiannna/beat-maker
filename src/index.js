

const container = document.getElementById("container");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
container.appendChild(newTrackButton);




const track = document.createElement('ul');
track.setAttribute("class", "track");

for (let i = 0; i < 8; i++){
    let li = document.createElement('li');
    li.dataset.pos = `${i}`;
    track.appendChild(li);
}

console.log(container);
container.appendChild(track);




newTrackButton.addEventListener("click", (e) =>{
    //e.preventDefault();
    let track = document.createElement('ul');
    track.setAttribute("class", "track");

    for (let i = 0; i < 8; i++){
        let li = document.createElement('li');
        li.dataset.pos = `${i}`;
        track.appendChild(li);
    }

    console.log(container);
    container.appendChild(track);
});