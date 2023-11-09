class Controls {

    constructor(track){
        this.controls = this.addControls(track);
    }

    addControls(track){
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

        remove.addEventListener("click", (e) => {
            track.remove()
        });

        // Sound selection dropdown menu
        let soundMenu = document.createElement('select');
        let option = document.createElement("option");
        option.textContent = "Select Sound";
        option.setAttribute('selected', true);
        option.setAttribute('disabled', true);
        soundMenu.appendChild(option);

        for(let i = 0; i < 5; i++){
            let option = document.createElement("option");
            option.textContent = "option";
            soundMenu.appendChild(option);
        } 
        trackLeft.appendChild(soundMenu);
    }

    addControlListeners(){
        // listener for mute
        // listener for track remove
        // listener for volume
    }
}

export default Controls;