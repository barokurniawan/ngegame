import input from "./input.js";

export function drawStatusText(context: CanvasRenderingContext2D, input: input) {
    context.fillText("last input: " + input.lastKey, 10, 20);
}

export function drawSpeedText(context: CanvasRenderingContext2D, speed: string | number) {
    context.fillText("speed: " + speed, 10, 35);
}