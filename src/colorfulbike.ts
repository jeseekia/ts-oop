import Bike from './bike';

class ColorfulBike extends Bike {
    //color: string; //not needed because of line 5 "public color: string"
    constructor (speed: number, public color: string){
        super(speed); //calls the parent constructor + pass required speed
        this.color = color;
    }
}
export default ColorfulBike;

let colorfulBike: ColorfulBike = new ColorfulBike(1, "Pink");