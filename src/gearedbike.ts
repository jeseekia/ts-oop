import Bike from './bike';

class GearedBike extends Bike {
    gear: number = 1; //assign initial value
    shiftUp(): void {

    }
    shiftDown(): void {

    }
    //overrides logic from the Bike go() method
    go(): void {
        //this.speed += 1.5;
        super.go();
        super.go();//call super method
    }
}
let gearedBike: GearedBike = new GearedBike(1); //uses default constructor when not defined in the class
console.log(gearedBike.getSpeed());
gearedBike.go();
console.log(gearedBike.getSpeed());
export default GearedBike;