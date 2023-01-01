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
        const iFrame = 2;
        const lFrames = [1, 2, 3, 4, 5, 6];
        this.player.frameY = iFrame;

        this.player.speed = this.player.maxSpeed;
        let index = 0;
        while (this.player.currentState.state == this.state) {
            if(index >= lFrames.length) {
                index = 0;
            }

            const element = lFrames[index];
            this.player.frameX = element;

            await timer(150);
            index++;
        }
    }

    handleInput(input: string) {
        if(input == "ArrowUp") {
            this.player.setState(States.LOMPAT);
        }

        if(input == "ArrowDown") {
            this.player.setState(States.SANTAI);
        }

        if(input == "ArrowLeft") {
            this.player.setState(States.JALANKAKIBALIK);
        }
    }
}
