import Beat from "./beat";

class Sound {
    static allContexts = [];
    static initializezd = false;
    static trackContext;


    static packs = [
        {name: "Claps", count: 7}, 
        {name: "Blast Block", count: 9}, 
        {name: "Egg Shaker", count: 11}, 
        {name: "Mid Tom", count: 10}
    ];

    constructor(packName, num){
        if (Sound.initialized === false){
            Sound.trackContext = new AudioContext();
            Sound.initializezd = true;
        }

        this.audio = new Audio();
        //this.setSound(packName = 'Blast Block', num = 7);
        //this.audio.crossOrigin = 'anonymous'; // CORS access restrictions
        //this.audio.src = './assets/Claps/0.wav';
        this.audio.loop = false;
        this.isAnimating = false;
        this.audioSourceSet = false;

        //console.log(this.audio);
        //this.audio.play();
    }

    src(packName, num){
        let srcPath = './assets/';

        srcPath += `${packName}/${num}.wav`;
        return srcPath;
    }

    setSound(packName, num){
        this.audio = new Audio(this.src(packName, num));
        this.createContext();
        //Sound.createContext();

    }

    createContext(){
        //const trackContext = new AudioContext();

        console.log("All sound contexts:", Sound.allContexts);

        const isNotThisSource = (context) => {
            return context.src != this.audio.src;
        }

        if (Sound.allContexts.every(isNotThisSource)){

            console.log("creating context for", this.audio.src)
            //let trackContext =  new AudioContext();
            //let src = Sound.trackContext.createMediaElementSource(this.audio);
            let src = Sound.trackContext.createdMediaElementSource(this.audio);

            //let mediaStreamDestination = trackContext.createMediaStreamDestination();
            let analyser = Sound.trackContext.createAnalyser();
            src.connect(analyser); // for visualizing
            //src.connect(mediaStreamDestination);
            // src.connect(Sound.combinedStream);

            //Sound.mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);
            

            analyser.connect(Sound.trackContext.destination);
            analyser.fftsize = 512;

            let bufferLength = analyser.frequencyBinCount;
            let freqData = new Uint8Array(bufferLength);

            
            Sound.allContexts.push({createdMediaElementSource: src, src: this.audio.src, freqData: freqData, analyser: analyser});
            //Sound.combinedStream.addTrack(src.mediaElementSource.mediaStream.getAudioTracks()[0]);
        }
    }

    static record(){

       //const trackContext = createContext();

        // Create a common MediaStreamDestinationNode
        const mediaStream = new MediaStream();
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const commonDestination = Sound.trackContext.createMediaStreamDestination();

        // Connect each audio source to the MediaRecorder stream
        Sound.allContexts.forEach((context) => {
            console.log("Context src: ", context.src);

            //context.createdMediaElementSource.disconnect();
            context.createdMediaElementSource.connect(commonDestination);
        });

        //const mediaRecorder = new MediaRecorder(new MediaStream());
        const mediaRecorder = new MediaRecorder(commonDestination.stream);
        const chunks = [];

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            
            const audioBlob = new Blob(chunks, { type: 'audio/wav' });
    
            const audioUrl = URL.createObjectURL(audioBlob);
    
            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = audioUrl;
            downloadLink.download = 'mybeat.wav';
            downloadLink.click();
    
            // Clean up the blob URL
            URL.revokeObjectURL(audioUrl);
        };

        // Start recording
        mediaRecorder.start();

        // Stop recording after a certain duration or when the user decides
        setTimeout(() => {
        mediaRecorder.stop();
        }, 10000); 
    }

    playSound(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        let barHeight;
        let x;

        const barWidth = canvas.width/20; // 1 bar


        console.log(this.audio.play());

        const animate = function(){
            const allFreqData = [];
            const agg = [];

            ctx.clearRect(0,0, canvas.width, canvas.height);

            requestAnimationFrame(animate);

            let freqData;
            Sound.allContexts.forEach((audioContextObj) => {
                freqData = audioContextObj.freqData;
                audioContextObj.analyser.getByteFrequencyData(freqData); // populate with data
                allFreqData.push(freqData);
            })


            if (Sound.allContexts.length >0){
                for (let i = 0; i < allFreqData[0].length; i++){
                    agg.push(0);
                    allFreqData.forEach((data) => {
                        agg[i] += data[i];
                    });
                }
            }

            x = 0;
            //analyser.getByteFrequencyData(dataArray);
            for(let i = 0; i < 40; i++){
                // barHeight = dataArray[i];
                //barHeight = freqData[i];
                barHeight = agg[i];
                ctx.fillStyle = 'white';
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth;
            }
            console.log("Visualizer Running!");
        }
        animate();
    }

    visualizeSound(){}

    random(){

    }
}

export default Sound;