import Controls from "./controls.js";
import Sound from "./sound.js";


class Track {
    // add track - add segments, listeners to segments, controls, 

    constructor(container){
        this.segments = [];
        this.trackDiv = null;
        this.addTrack(container);
        this.sound = new Sound(this.trackDiv);
    }

    addTrack(container){

        //Track container
        // const track = document.createElement('div');
        this.trackDiv = document.createElement('div');
        this.trackDiv.classList.add("track");
        container.appendChild(this.trackDiv);

        // CALL ADD CONTROLS HERE
        let controls = new Controls(this); // PASS IN TRACK OBJECT, NOT DIV


        //Right track div
        const trackRight = document.createElement('div');
        trackRight.classList.add("track-div-right")
        this.trackDiv.appendChild(trackRight);

        //Add segments to right track div
        let trackUL = document.createElement('ul');
        for (let i = 0; i < 8; i++){
            let segment = document.createElement('li');
            segment.classList.add("segment");
            segment.classList.add("off");
            segment.dataset.pos = `${i}`;
            this.segments.push(segment);
            trackUL.appendChild(segment);
        }
        trackRight.appendChild(trackUL);
        this.addSegmentListner(trackUL);
    }



    addSegmentListner(trackUL){
        let segmentState = false;

        trackUL.addEventListener("click", (e) =>{

            console.log("segment clicked!")
            // toggle class on/off
            if (segmentState === false){
                e.target.classList.remove("off");
                e.target.classList.add("on");
                segmentState = true;
                console.log(this);
                this.sound.playSound();
            }else{
                e.target.classList.remove("on");
                e.target.classList.add("off");
                segmentState = false;
            }
        });
    }



    playTrack(){

        let delay = 0;
        for(let i = 0; i < 8; i++){
            setTimeout(()=> {
                console.log(this.segments[i]);
                console.log(this.segments[i].classList[1]);
                if (this.segments[i].classList[1] === "on"){
                    this.sound.playSound();
                }
            }, delay);
            delay += 1000;
        }
    }


    // randomize (add "on" class to random segments)
}


export default Track;