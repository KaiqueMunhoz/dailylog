var Elevator = {
    
    floor : 0,
    up(){
        this.floor++;
        if(this.floor > 3){
            this.floor = 3;
        }
        this.message();
    },
    down(){
        this.floor--;
        if(this.floor < 0){
            this.floor = 0;
        }
        this.message();
    },
    message(){
        console.log("Andar: " + this.floor);
    }
}