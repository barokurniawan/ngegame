import Player from "../models/player.js";

export const states = {
    SANTAI: 0,
    LOMPAT: 1,
    JALANKAKI: 2,
    JALANKAKIBALIK: 3,
};

class State{
    state: string;

    constructor(state: string) {
        this.state = state;
    }

    enter() {}
    handleInput(input: string) {}
}

export class Santai extends State {
    player: Player;

    constructor(player: Player){
        super("SANTAI");

        this.player = player;
    }

    enter() {
        this.player.frameX = 1;
        this.player.frameY = 1;
        this.player.speed = 0;
    }

    handleInput(input: string) {
        if(input == "ArrowUp") {
            this.player.setState(states.LOMPAT);
            console.log("states.LOMPAT: ", states.LOMPAT);
            console.log(this.player);
        }

        if(input == "ArrowRight") {
            this.player.setState(states.JALANKAKI);
            console.log("states.JALANKAKI: ", states.JALANKAKI);
            console.log(this.player);
        }

        if(input == "ArrowLeft") {
            this.player.setState(states.JALANKAKIBALIK);
            console.log("states.JALANKAKIBALIK: ", states.JALANKAKIBALIK);
            console.log(this.player);
        }
    }
}

export class Lompat extends State {
    player: Player;

    constructor(player: Player){
        super("LOMPAT");

        this.player = player;
    }

    enter() {
        if(!this.player.canJump()) {
            return;
        }

        this.player.frameX = 2;
        this.player.frameY = 3;
        this.player.jump();
    }

    handleInput(input: string) {
        if(input == "ArrowRight") {
            this.player.setState(states.SANTAI);
            console.log("states.SANTAI: ", states.SANTAI);
            console.log(this.player);
        }

        if(input == "ArrowDown") {
            this.player.setState(states.SANTAI);
            console.log("states.SANTAI: ", states.SANTAI);
            console.log(this.player);
        }
    }
}

export class JalanKaki extends State {
    player: Player;
    constructor(player: Player) {
        super("JALANKAKI");

        this.player = player;
    }

    async enter() {
        const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
        var iFrame = 2;
        var lFrames = [1, 2, 3, 4, 5, 6];
        this.player.frameY = iFrame;

        this.player.speed = this.player.maxSpeed;
        for (var index = 0; index < lFrames.length; index++) {
            const element = lFrames[index];
            this.player.frameX = element;

            await timer(150);
            if(this.player.currentState.state != "JALANKAKI") {
                break;
            }

            if(index == (lFrames.length - 1)) {
                index = 0;
            }
        }
    }

    handleInput(input: string) {
        if(input == "ArrowUp") {
            this.player.setState(states.LOMPAT);
            console.log("states.LOMPAT: ", states.LOMPAT);
            console.log(this.player);
        }

        if(input == "ArrowDown") {
            this.player.setState(states.SANTAI);
            console.log("states.SANTAI: ", states.SANTAI);
            console.log(this.player);
        }

        if(input == "ArrowLeft") {
            this.player.setState(states.JALANKAKIBALIK);
            console.log("states.JALANKAKIBALIK: ", states.JALANKAKIBALIK);
            console.log(this.player);
        }
    }
}

export class JalanKakiBalik extends State {
    player: Player;
    constructor(player: Player) {
        super("JALANKAKIBALIK");

        this.player = player;
    }

    async enter() {
        const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
        var iFrame = 2;
        var lFrames = [1, 2, 3, 4, 5, 6];
        this.player.frameY = iFrame;

        this.player.speed = -this.player.maxSpeed;
        for (var index = 0; index < lFrames.length; index++) {
            const element = lFrames[index];
            this.player.frameX = element;

            await timer(150);
            if(this.player.currentState.state != "JALANKAKIBALIK") {
                break;
            }

            if(index == (lFrames.length - 1)) {
                index = 0;
            }
        }
    }

    handleInput(input: string) {
        if(input == "ArrowUp") {
            this.player.setState(states.LOMPAT);
            console.log("states.LOMPAT: ", states.LOMPAT);
            console.log(this.player);
        }

        if(input == "ArrowDown") {
            this.player.setState(states.SANTAI);
            console.log("states.SANTAI: ", states.SANTAI);
            console.log(this.player);
        }

        if(input == "ArrowRight") {
            this.player.setState(states.JALANKAKI);
            console.log("states.JALANKAKI: ", states.JALANKAKI);
            console.log(this.player);
        }
    }
}
