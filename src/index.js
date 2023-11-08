

const container = document.getElementById("container");

const track = document.createElement('ul');

for (let i = 0; i < 8; i++){
    let li = document.createElement('li');
    li.dataset.pos = `${i}`;
    track.appendChild(li);
}

console.log(container);
container.appendChild(track);

const addTrackButton = document.createElement('button');
