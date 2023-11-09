class Controls {

    constructor(track){
        this.track = track;
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

        // 'Remove' button listener
        this.addControlListeners(remove);

        // Test Sound
        const testButton = document.createElement('button');
        testButton.textContent = 'Test';
        trackLeft.appendChild(testButton);

        testButton.addEventListener("click", (e) =>{
            const audioElement = new Audio("./assets/RD_C_1.wav");
            audioElement.play();
        });

        // Sound TYPE selection dropdown menu
        let soundTypeMenu = document.createElement('select');
        let option = document.createElement("option");
        option.textContent = "Select Sound Type";
        option.setAttribute('selected', true);
        option.setAttribute('disabled', true);
        soundTypeMenu.appendChild(option);

        for(let i = 0; i < 5; i++){
            let option = document.createElement("option");
            option.textContent = "option";
            soundTypeMenu.appendChild(option);
        } 
        trackLeft.appendChild(soundTypeMenu);

        // Sound selection dropdown menu
        let soundMenu = document.createElement('select');
        option = document.createElement("option");
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

    addControlListeners(remove){
        // listener for mute
        // listener for track remove
        // listener for volume
        remove.addEventListener("click", (e) => {
            this.track.remove()
        });

    }
}

export default Controls;