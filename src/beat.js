import Track from "./track.js"


class Beat {
    constructor(container){
        this.tempo = 1000;
        this.volume = 1000;
        this.tracks = [new Track(container)];
        //console.log("All tracks:" , this.tracks)
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