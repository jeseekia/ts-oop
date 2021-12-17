import Friend from './friend';

class HumanFriend implements Friend {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(greeting: string): void {
        console.log(`${greeting} ${this.name}`);
    };
    getInitial(): string {
        return this.name.charAt(0);
    }
}
export default HumanFriend;


let bart: HumanFriend = new HumanFriend("Bart");
//polymorphism being able to assing HumanFriend to Friend
let lisa: Friend = new HumanFriend("Lisa");
console.log(bart.name);
bart.greet("Hello");
lisa.greet("Hi");