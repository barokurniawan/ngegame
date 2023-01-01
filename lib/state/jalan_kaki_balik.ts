import { States } from "../constants/states.js";
import Player from "../models/player.js";
import { State } from "./state.js";

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
            this.player.setState(States.LOMPAT);
            console.log("States.LOMPAT: ", States.LOMPAT);
            console.log(this.player);
        }

        if(input == "ArrowDown") {
            this.player.setState(States.SANTAI);
            console.log("States.SANTAI: ", States.SANTAI);
            console.log(this.player);
        }

        if(input == "ArrowRight") {
            this.player.setState(States.JALANKAKI);
            console.log("States.JALANKAKI: ", States.JALANKAKI);
            console.log(this.player);
        }
    }
}
