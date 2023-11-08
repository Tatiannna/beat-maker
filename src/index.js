

const container = document.getElementById("container");

const newTrackButton = document.createElement('button');
newTrackButton.textContent = 'Add Track';
container.appendChild(newTrackButton);




const track = document.createElement('ul');

for (let i = 0; i < 8; i++){
    let li = document.createElement('li');
    li.dataset.pos = `${i}`;
    track.appendChild(li);
}

console.log(container);
container.appendChild(track);




newTrackButton.addEventListener("click", (e) =>{
    //e.preventDefault();
    const track = document.createElement('ul');

    for (let i = 0; i < 8; i++){
        let li = document.createElement('li');
        li.dataset.pos = `${i}`;
        track.appendChild(li);
    }

    console.log(container);
    container.appendChild(track);
});