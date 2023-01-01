import Player from "../models/player.js";
import { State } from "./state.js";

export class Lompat extends State {
    player: Player;

    constructor(player: Player){
        super("LOMPAT");

        this.player = player;
    }

    async enter() {
        if(!this.player.canJump()) {
            return;
        }

        this.player.frameY = 3;
        this.player.jump();

        const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
        const lFrames = [1, 2, 3, 4, 5, 6];
        let index = 0;

        while (this.player.currentState.state == this.state) {
            if(index >= lFrames.length) {
                index = 0;
            }

            const element = lFrames[index];
            this.player.frameX = element;
    
            await timer(300);
            index++;
        }
    }

    handleInput(input: string) {}
}
