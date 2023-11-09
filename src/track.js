import Controls from "./controls.js";

class Track {
    // add track - add segments, listeners to segments, controls, 

    constructor(container){
        this.track = this.addTrack(container);
    }

    addTrack(container){
        console.log("adding a new track");

        //Track container
        const track = document.createElement('div');
        track.classList.add("track");
        container.appendChild(track);

        // CALL ADD CONTROLS HERE
        let controls = new Controls(track);


        //Right track div
        const trackRight = document.createElement('div');
        trackRight.classList.add("track-div-right")
        track.appendChild(trackRight);

        //Add segments to right track div
        let trackUL = document.createElement('ul');
        for (let i = 0; i < 8; i++){
            let segment = document.createElement('li');
            segment.classList.add("segment");
            segment.classList.add("off");
            segment.dataset.pos = `${i}`;
            trackUL.appendChild(segment);
        }
        trackRight.appendChild(trackUL);
        this.addSegmentListner(trackUL);

        return track;
    }


    // add listener for segments
    addSegmentListner(trackUL){
        let segmentState = false;

        trackUL.addEventListener("click", (e) =>{

            console.log("segment clicked!")
            // toggle class on/off
            if (segmentState === false){
                e.target.classList.remove("off");
                e.target.classList.add("on");
                segmentState = true;
            }else{
                e.target.classList.remove("on");
                e.target.classList.add("off");
                segmentState = false;
            }
        });
    }


    // randomize (add "on" class to random segments)
}

    



export default Track;