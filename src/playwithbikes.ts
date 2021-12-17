import Bike from './bike';
import GearedBike from './gearedbike';'./gearedbike';
import ColorfulBike from './colorfulbike';'./colorfulbike';

let bike: Bike = new Bike(12);

let gearedBike: Bike = new GearedBike(12);

let otherGearedBike: GearedBike = new GearedBike(12);

let colorfulBike: Bike = new ColorfulBike(12,"pink");

let bikes: Bike[] = [
    gearedBike,
    bike,
    otherGearedBike,
    colorfulBike
];

let colorfulBikes: ColorfulBike[] = [
    //colorfulBike, //this cannot be done because the type is specific to only colorful bikes
    
]