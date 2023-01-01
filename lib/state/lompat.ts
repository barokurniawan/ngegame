import { States } from "../constants/states.js";
import Player from "../models/player.js";
import { State } from "./state.js";

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
            this.player.setState(States.SANTAI);
            console.log("States.SANTAI: ", States.SANTAI);
            console.log(this.player);
        }

        if(input == "ArrowDown") {
            this.player.setState(States.SANTAI);
            console.log("States.SANTAI: ", States.SANTAI);
            console.log(this.player);
        }
    }
}
