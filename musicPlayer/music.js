class Music {
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.file = file;
        this.img = img;
    }

    getName(){
        return this.title + "-" + this.singer;
    }
}

const musicList = [
    new Music("Ama Galiba","Sagopa Kajmer","1.jpg","track1.mp3"),
    new Music("Istakoz","Sagopa Kajmer","2.jpg","track2.mp3"),
    new Music("Uğurla Bahtiyarları","Sagopa Kajmer","3.jpg","track3.mp3")
];