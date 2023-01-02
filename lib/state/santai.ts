import { States } from "../constants/states.js";
import Player from "../models/player.js";
import { State } from "./state.js";

export class Santai extends State {
    player: Player;

    constructor(player: Player) {
        super("SANTAI");

        this.player = player;
    }

    async enter() {
        this.player.frameX = 1;
        this.player.frameY = 1;
        this.player.speed = 0;
        this.player.jumpSpeed = 0;

        const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
        const lFrames = [1, 2];
        let index = 0;

        while (this.player.currentState.state == this.state) {
            if (index >= lFrames.length) {
                index = 0;
            }

            const element = lFrames[index];
            this.player.frameX = element;

            await timer(250);
            index++;
        }
    }

    handleInput(input: string) {
        if (input == "ArrowUp") {
            this.player.setState(States.LOMPAT);
        }

        if (input == "ArrowRight") {
            this.player.setState(States.JALANKAKI);
        }

        if (input == "ArrowLeft") {
            this.player.setState(States.JALANKAKIBALIK);
        }
    }
}
