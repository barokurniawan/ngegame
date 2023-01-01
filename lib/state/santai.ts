import { States } from "../constants/states.js";
import Player from "../models/player.js";
import { State } from "./state.js";

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
        this.player.jumpSpeed = 0;
    }

    handleInput(input: string) {
        if(input == "ArrowUp") {
            this.player.setState(States.LOMPAT);
            console.log("States.LOMPAT: ", States.LOMPAT);
            console.log(this.player);
        }

        if(input == "ArrowRight") {
            this.player.setState(States.JALANKAKI);
            console.log("States.JALANKAKI: ", States.JALANKAKI);
            console.log(this.player);
        }

        if(input == "ArrowLeft") {
            this.player.setState(States.JALANKAKIBALIK);
            console.log("States.JALANKAKIBALIK: ", States.JALANKAKIBALIK);
            console.log(this.player);
        }
    }
}
