import Player from "./models/player.js";
import InputHandler from "./common/input.js";
import { drawSpeedText, drawStatusText } from "./common/utils.js";

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("theCanvas") as HTMLCanvasElement;
    canvas.width = 720;
    canvas.height = 460;
    
    const loadingEl = document.getElementById("loading") as HTMLElement;
    loadingEl.style.display = "none";

    const context = canvas.getContext("2d")
    const player = new Player(canvas.height, canvas.width);
    const input = new InputHandler();

    function animate() {
        context!.clearRect(0, 0, canvas.width, canvas.height);

        player.update(input);
        player.draw(context!);

        drawStatusText(context!, input);
        drawSpeedText(context!, player.speed);
        requestAnimationFrame(animate);
    }

    animate();
});