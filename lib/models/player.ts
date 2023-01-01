import { Santai, Lompat, JalanKaki, JalanKakiBalik, states } from "../state/state.js";

export default class Player {
    gameHeight: number;
    gameWidth: number;
    states: any[];
    currentState: any;
    height: number;
    width: number;
    image: CanvasImageSource;
    y: number;
    x: number;
    frameX: number;
    frameY: number;
    speed: number;
    maxSpeed: number;
    jumpSpeed: number;

    constructor(gameHeight: number, gameWidth: number) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.states = [new Santai(this), new Lompat(this), new JalanKaki(this), new JalanKakiBalik(this)];
        this.currentState = this.states[0];

        this.height = 120;
        this.width = 65;

        this.image = document.getElementById("playerImg") as CanvasImageSource;

        this.x = (this.gameWidth / 2) - (this.width / 2);
        this.y = this.gameHeight - this.height;

        this.frameY = 1;
        this.frameX = 1;

        this.speed = 0;
        this.maxSpeed = 4;
        this.jumpSpeed = 0;
    }

    isOnTheGround() {
        return (this.gameHeight - this.height) >= this.y;
    }

    canJump() {
        return this.isOnTheGround();
    }

    jump() { 
        this.jumpSpeed = this.jumpSpeed - 4;
    }

    setState(stateId: number) {
        console.log("this.states[stateId]: ", this.states[stateId]);
        this.currentState = this.states[stateId];
        this.currentState.enter();
    }

    update(input: any) {
        this.currentState.handleInput(input);
        this.x += this.speed;
        this.y += this.jumpSpeed;

        if (this.x < 0 && this.currentState.state != "SANTAI") {
            this.x = 0;
            this.setState(states.SANTAI);
        }

        if (this.x > (this.gameWidth - this.width) && this.currentState.state != "SANTAI") {
            this.x = this.gameWidth - this.width;
            this.setState(states.SANTAI);
        }

        // if (this.y < 0) {
        //     this.y = 0;
        //     this.setState(states.SANTAI);
        // }

        // if (this.y > (this.gameHeight - this.height)) {
        //     this.y = this.gameHeight - this.height;
        //     this.setState(states.SANTAI);
        // }
    }

    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image,
            65 + ((this.frameX - 1) * 75),
            20 + ((this.frameY - 1) * 130),
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}