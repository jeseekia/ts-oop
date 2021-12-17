import HumanFriend from './humanfriend';

interface Friend { //Interface is only a definition
    name: string;
    greet: (greeting: string) => void; //define parameters and return type
    getInitial: () => string;
}
export default Friend;

const lilly: Friend = {
    name: "Lilly",
    greet(greeting: string): void { //must implement the greet function
        console.log(`${greeting} ${this.name}`);
    },
    getInitial(): string { //must implement the getInitial
        return this.name.charAt(0);
    }
}

const billy: Friend = {
    name: "Billy",
    greet(greeting: string): void {
        console.log(`${greeting}`);
    },
    getInitial(): string {
        return this.name.charAt(0);
    }
}

let humanfriend: HumanFriend = new HumanFriend("Jeseekia");