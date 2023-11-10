

class Sound {

    static packs = [
        {name: "Claps", count: 2}, 
        {name: "Blast Block", count: 3}, 
        {name: "Egg Shaker", count: 3}, 
        {name: "Mid Tom", count: 3}
    ];

    constructor(){
        //this.track = track;
        this.audio = new Audio("./assets/Claps/RD_C_1.wav");
        
    }

    playSound(){
        this.audio.play();
    }

    getCollections(){
        const collectionPaths = [];

        for(let i = 0; i < this.packs.length; i++){
            collectionPaths.push({path: `./assets/${collectionNames[i]}/`, name: collectionNames[i]});
        }
        return collectionPaths;
    }

    getSoundPath(collection, option){
        return collection + option;
    }

    setSound(){

    }

    random(){

    }
}



export default Sound;