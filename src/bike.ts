// Parent Class
class Bike {
    //speed: number = 0;
    private speed: number; //cannot be accessed outside of the class
    constructor (speed: number) {
        this.speed = speed;
    }
    go(): void {
        this.speed++;
    }
    getSpeed() { //getter
        return this.speed;
    }
    setSpeed(speed: number) { //setter
        this.speed = speed;
    }
}

let bike: Bike = new Bike(1); //uses default constructor when not defined in the class
console.log(bike.getSpeed());
bike.go();
console.log(bike.getSpeed());
export default Bike;

// function sayHello(){

// }

// bike.go(); //method
// sayHello(); //stand-alone function