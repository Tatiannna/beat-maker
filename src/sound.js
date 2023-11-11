class Sound {

    static packs = [
        {name: "Claps", count: 2}, 
        {name: "Blast Block", count: 3}, 
        {name: "Egg Shaker", count: 3}, 
        {name: "Mid Tom", count: 3}
    ];

    constructor(packName, num){
        this.audio = new Audio(this.src(packName, num));
    }

    playSound(){
        this.audio.play();
    }

    src(packName, num){
        let srcPath = './assets/';

        srcPath += `${packName}/${num}.wav`;
        return srcPath;
    }

    setSound(packName, num){
        this.audio = new Audio(this.src(packName, num));
    }

    random(){

    }
}
export default Sound;