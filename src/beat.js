import Track from "./track.js"


class Beat {
    constructor(container){
        this.tempo = 1000;
        this.volume = 1000;
        this.tracks = [new Track(container)];
        console.log("All tracks:" , this.tracks)
    }

    addTrack(container){
        const track = new Track(container);
        this.tracks.push(track);
        console.log("All tracks:" , this.tracks)
    }


    playAllTracks(){
        console.log(this.tracks);
    }

    changeTempo(diff){
        this.tempo += diff;
    }
}


export default Beat;