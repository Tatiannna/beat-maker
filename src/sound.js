class Sound {

    static packs = [
        {name: "Claps", count: 7}, 
        {name: "Blast Block", count: 9}, 
        {name: "Egg Shaker", count: 11}, 
        {name: "Mid Tom", count: 10}
    ];

    constructor(packName, num){
        this.audio = new Audio();
        this.setSound(packName = 'Blast Block', num = 7);
        //this.audio.crossOrigin = 'anonymous'; // CORS access restrictions
        //this.audio.src = './assets/Claps/0.wav';
        this.audio.loop = false;
        this.isAnimating = false;
        this.audioSourceSet = false;

        //console.log(this.audio);
        //this.audio.play();
    }

    playSound(){
        //console.log(this.visualizeSound());
        //console.log(this.audio);
        console.log(this.audio.play());
        console.log("CALLING playSound");

        const audioCtx = new AudioContext();
        //console.log(audioCtx);

        //const container = document.getElementById('container');
        // const canvas = document.getElementById('canvas');     
        const ctx = canvas.getContext('2d');

        let audioSource;
        let analyser;
        
        // try{
        if (this.audioSourceSet === false){
            // if (!audioSource){

            audioSource = audioCtx.createMediaElementSource(this.audio);
            analyser = audioCtx.createAnalyser();
            audioSource.connect(analyser);
            analyser.connect(audioCtx.destination);
            analyser.fftSize = 64;
            const bufferLength = analyser.frequencyBinCount; // num of bars, half the value of fft size
            const dataArray = new Uint8Array(bufferLength); // conversion into proper format. 8 bit integers
            let barHeight;
            let x;
            const barWidth = canvas.width/bufferLength; // 1 bar
            // }     
            this.audioSourceSet = true;


            function animate(){
                x = 0;
                ctx.clearRect(0,0, canvas.width, canvas.height);
                analyser.getByteFrequencyData(dataArray);
                for(let i = 0; i < bufferLength; i++){
                    barHeight = dataArray[i];
                    ctx.fillStyle = 'white';
                    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                    x += barWidth;
                }
                requestAnimationFrame(animate);
                console.log("Visualizer Running!");
            }

            //if (this.isAnimating === false){
            animate();
                //this.isAnimating = true;
            //}
        }
    }
    

    visualizeSound(){}

       
    src(packName, num){
        let srcPath = './assets/';

        srcPath += `${packName}/${num}.wav`;
        return srcPath;
    }

    setSound(packName, num){
        this.audio = new Audio(this.src(packName, num));
    }

    visualizeSound(){
    }

    random(){

    }
}

export default Sound;