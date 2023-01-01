import { States } from "../constants/states.js";
import Player from "../models/player.js";
import { State } from "./state.js";

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
            this.player.setState(States.LOMPAT);
            console.log("States.LOMPAT: ", States.LOMPAT);
            console.log(this.player);
        }

        if(input == "ArrowDown") {
            this.player.setState(States.SANTAI);
            console.log("States.SANTAI: ", States.SANTAI);
            console.log(this.player);
        }

        if(input == "ArrowLeft") {
            this.player.setState(States.JALANKAKIBALIK);
            console.log("States.JALANKAKIBALIK: ", States.JALANKAKIBALIK);
            console.log(this.player);
        }
    }
}
