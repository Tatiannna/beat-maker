import Track from "./track.js";
import Sound from "./sound.js";
import Beat from "./beat.js";

class Controls {

    constructor(track){
        this.track = track; //TRACK OBJECT, NOT DIV
        this.addControls();
    }

    addControls(){
        // console.log("Calling addControls(). Value of track: ", this.track);


        // create Left track div
        const trackLeft = document.createElement('div');
        trackLeft.classList.add("track-div-left");
        this.track.trackDiv.appendChild(trackLeft);

        // Add controls to left track div
        let remove = document.createElement('button');
        remove.textContent = 'Remove';
        let mute = document.createElement('button');
        mute.textContent = 'Mute';
        trackLeft.appendChild(remove);
        trackLeft.appendChild(mute);

        // 'Remove' button listener
        this.addControlListeners(remove);

        // Test Sound Button
        const testButton = document.createElement('button');
        testButton.textContent = 'Test';
        trackLeft.appendChild(testButton);

        testButton.addEventListener("click", (e) =>{
            const audioElement = new Audio("./assets/RD_C_1.wav");
            audioElement.play();
        });

        // Add Track Play button
        const playButton = document.createElement("button");
        playButton.textContent = "Play";
        trackLeft.appendChild(playButton);

        playButton.addEventListener("click", (e)=> {
            this.track.playTrack();
        });


        // Sound PACK selection dropdown menu
        let soundTypeMenu = document.createElement('select');
        let option = document.createElement("option");
        option.textContent = "Select Sound Pack";
        option.setAttribute('selected', true);
        option.setAttribute('disabled', true);
        soundTypeMenu.appendChild(option);


        // Populate pack options
        for(let i = 0; i < Sound.packs.length; i++){
            let option = document.createElement("option");
            option.textContent = Sound.packs[i].name;
            option.value = Sound.packs[i].name;
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
        trackLeft.appendChild(soundMenu);


        // listener for pack selection
        let selectedPack = null;
        soundTypeMenu.addEventListener("change", (e)=>{
            selectedPack = e.srcElement.value;
            console.log(selectedPack);

            let numSounds;
            let packIndex;
            for(let i = 0; i < Sound.packs.length; i++){
                if (selectedPack === Sound.packs[i].name){
                    packIndex = i;
                    numSounds = Sound.packs[i].count;
                }
            }

            // List available sounds based on Pack selection
            soundMenu.replaceChildren();
            option = document.createElement("option");
            option.textContent = "Select Sound";
            option.setAttribute('selected', true);
            option.setAttribute('disabled', true);
            soundMenu.appendChild(option);
            for(let i = 0; i < numSounds; i++){
                let option = document.createElement("option");
                option.textContent = `${Sound.packs[packIndex].name} ${i}`;
                option.value = `${i}`;
                soundMenu.appendChild(option);
            }
        });

        //Assign track based on sound selection
        let selectedSound = null;
            soundMenu.addEventListener("change", (e) => {
            selectedSound = e.srcElement.value;
            console.log(selectedSound);
            this.track.sound.setSound(selectedPack, selectedSound);
            this.track.sound.playSound();
        });

    }

    addControlListeners(remove){
        // listener for mute
        // listener for track remove
        // listener for volume

        remove.addEventListener("click", (e) => {
            let idx = Beat.tracks.indexOf(this.track);
            console.log("index to remove: ", idx);
            Beat.tracks.splice(idx, 1);
            this.track.trackDiv.remove();
            //this.track = undefined;
        });
    }
}

export default Controls;