import Track from "./track.js";


class Beat {

    static tracks = [];

    constructor(container, nav ){

        this.tempo = 1000;
        this.volume = 1000;

        for(let i = 0; i < 8; i++){
            Beat.tracks.push(new Track(container));
        }
        this.addNavControls(nav);
    }

    addNavControls(nav){
        const navRight = document.getElementById('nav-left');
        const newTrackButton = document.createElement('button');
        newTrackButton.textContent = 'Track +';
        navRight.appendChild(newTrackButton);

        const play = document.createElement('button');
        play.textContent = "Play";
        navRight.appendChild(play);

        const tempoPlus = document.createElement('button');
        tempoPlus.textContent = "Tempo +";
        navRight.appendChild(tempoPlus);

        const tempoMinus = document.createElement('button');
        tempoMinus.textContent = "Tempo -";
        navRight.appendChild(tempoMinus);

        const volumeMinus = document.createElement('button');
        volumeMinus.textContent = "Volume -";
        navRight.appendChild(volumeMinus);

        const volumePlus = document.createElement('button');
        volumePlus.textContent = "Volume+";
        navRight.appendChild(volumePlus);


        newTrackButton.addEventListener("click", (e) =>{
            this.addTrack(container);
        });
        
        play.addEventListener( "click", (e) =>{
            this.playAllTracks();
        });
        
        tempoMinus.addEventListener( "click", (e) =>{
            this.changeTempo(-50);
        });
        
        tempoPlus.addEventListener( "click", (e) =>{
            this.changeTempo(50);
        });

        volumeMinus.addEventListener( "click", (e) =>{
            this.changeVolume(-50);
        });

        volumePlus.addEventListener( "click", (e) =>{
            this.changeVolume(50);
        });
    }


    addTrack(container){
        const track = new Track(container);
        Beat.tracks.push(track);
        // console.log("All tracks:" ,tracks)
    }


    playAllTracks(){
        const playFunctions = [];

        if (Beat.tracks.length > 0){
            Beat.tracks.forEach( (track) => {
                playFunctions.push(new Promise(track.playTrack.bind(track)));
            })
            console.log(playFunctions);

            Promise.all(playFunctions).catch(() => console.log("Something went wrong!"));
        }else{
            console.log("No tracks to play!");
        }
            
    }

    changeTempo(diff){
        this.tempo += diff;
        console.log(this.tempo);
    }

    changeVolume(diff){
        this.volume += diff;
        console.log(this.volume);
    }
}


export default Beat;