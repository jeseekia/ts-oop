import Friend from './friend';

class HumanFriend implements Friend {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(greeting: string): void { //required by interface
        console.log(`${greeting} ${this.name}`);
    };
    getInitial(): string { //required by interface
        return this.name.charAt(0);
    };
    getName(): string { //class method
        return this.name;
    }
}
export default HumanFriend;


let bart: HumanFriend = new HumanFriend("Bart");
//polymorphism being able to assing HumanFriend to Friend
let lisa: Friend = new HumanFriend("Lisa");
console.log(bart.name);
bart.greet("Hello");
lisa.greet("Hi");