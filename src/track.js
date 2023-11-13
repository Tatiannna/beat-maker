import Controls from "./controls.js";
import Sound from "./sound.js";
import Beat from "./beat.js";



class Track {

    constructor(container){
        this.segments = [];
        this.trackDiv = null;
        this.sound = new Sound();
        this.buildTrack(container);
    }

    buildTrack(container){


        //Track container
        this.trackDiv = document.createElement('div');
        this.trackDiv.classList.add("track");
        container.appendChild(this.trackDiv);

        // ADD CONTROLS HERE
        let controls = new Controls(this);


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
        trackUL.addEventListener("click", (e) =>{
            if (e.srcElement.classList[0] == "segment"){
                if (e.srcElement.classList[1] === "off"){
                    e.target.classList.remove("off");
                    e.target.classList.add("on");
                }else{
                    e.target.classList.remove("on");
                    e.target.classList.add("off");
                }
            }
        });
    }


    playTrack(){
        let count = 0;

        function playSegment(){
            if (this.segments[count].classList[1] === "on"){
                this.sound.playSound();
                console.log(`Playing sound for segment ${count+1}`);
            }else{
                console.log(`NO SOUND for segment ${count+1}`);
            }
            count += 1;
            if (count === 8) clearInterval(countInterval);
        }
        const countInterval = setInterval(playSegment.bind(this), 1000);
    }
    // randomize (add "on" class to random segments)
}


export default Track;