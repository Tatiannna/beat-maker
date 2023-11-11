import Track from "./track.js"


class Beat {
    constructor(container, nav ){

        this.tempo = 1000;
        this.volume = 1000;
        this.tracks = [new Track(container)];
        this.addNavControls(nav);
    }

    addNavControls(nav){
        const newTrackButton = document.createElement('button');
        newTrackButton.textContent = 'Add Track';
        nav.appendChild(newTrackButton);

        const play = document.createElement('button');
        play.textContent = "Play";
        nav.appendChild(play);

        const tempoPlus = document.createElement('button');
        tempoPlus.textContent = "Tempo +";
        nav.appendChild(tempoPlus);

        const tempoMinus = document.createElement('button');
        tempoMinus.textContent = "Tempo -";
        nav.appendChild(tempoMinus);


        newTrackButton.addEventListener("click", (e) =>{
            this.addTrack(container);
        });
        
        play.addEventListener( "click", (e) =>{
            this.playAllTracks();
        });
        
        tempoMinus.addEventListener( "click", (e) =>{
            this.changeTempo(-50);
            console.log(this.tempo);
        });
        
        tempoPlus.addEventListener( "click", (e) =>{
            this.changeTempo(50);
            console.log(this.tempo);
        });
    }


    addTrack(container){
        const track = new Track(container);
        this.tracks.push(track);
        // console.log("All tracks:" , this.tracks)
    }


    playAllTracks(){
        const playFunctions = [];

        console.log(this.tracks);

        this.tracks.forEach( (track) => {
            playFunctions.push(new Promise(track.playTrack.bind(track)));
        })
        console.log(playFunctions);

        Promise.all(playFunctions).catch(() => console.log("Something went wrong!"));
    }

    changeTempo(diff){
        this.tempo += diff;
    }
}


export default Beat;