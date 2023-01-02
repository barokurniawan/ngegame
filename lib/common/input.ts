export default class InputHandler {
    lastKey: string;

    constructor() {
        this.lastKey = "";

        document.addEventListener("keydown", (evt) => {
            switch (evt.key) {
                case "ArrowUp":
                    this.lastKey = evt.key;
                    break;

                case "ArrowDown":
                    this.lastKey = evt.key;
                    break;

                case "ArrowLeft":
                    this.lastKey = evt.key;
                    break;

                case "ArrowRight":
                    this.lastKey = evt.key;
                    break;
            
                default:
                    break;
            }
        });

        document.addEventListener("keyup", (evt) => {
            switch (evt.key) {
                case "ArrowUp":
                    this.lastKey = evt.key;
                    break;

                case "ArrowDown":
                    this.lastKey = evt.key;
                    break;

                case "ArrowLeft":
                    this.lastKey = evt.key;
                    break;

                case "ArrowRight":
                    this.lastKey = evt.key;
                    break;
            
                default:
                    break;
            }
        });
    }

    reset() {
        this.lastKey = "";
    }
}