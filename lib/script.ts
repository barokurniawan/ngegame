import Player from "./models/player.js";
import InputHandler from "./common/input.js";
import { drawSpeedText, drawStatusText } from "./common/utils.js";

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("theCanvas") as HTMLCanvasElement;
    const loadingEl = document.getElementById("loading") as HTMLElement;

    loadingEl.style.display = "none";

    const context = canvas.getContext("2d")
    context!.scale(-1, 1);

    canvas.width = 720;
    canvas.height = 460;

    const player = new Player(canvas.height, canvas.width);
    const input = new InputHandler();

    function animate() {
        context!.clearRect(0, 0, canvas.width, canvas.height);

        console.log("input.lastKey: ", input.lastKey);
        player.update(input.lastKey);
        player.draw(context!);

        drawStatusText(context!, input);
        drawSpeedText(context!, player.speed);
        requestAnimationFrame(animate);
    }

    animate();
});