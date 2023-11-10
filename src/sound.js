

class Sound {
    constructor(){
        //this.track = track;
        this.audio = new Audio("./assets/Claps/RD_C_1.wav");
        this.packs = [
            {name: "Claps", count: 2}, 
            {name: "Blast Block", count: 3}, 
            {name: "Egg Shaker", count: 3}, 
            {name: "Mid Tom", count: 3}
        ];
    }

    playSound(){
        this.audio.play();
    }

    getCollections(){
        const collectionPaths = [];

        for(let i = 0; i < this.collectionNames.length; i++){
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