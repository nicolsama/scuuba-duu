export default class Fish {
    constructor() {

    }
    
    render(ctx, x, y) {
        ctx.fillStyle = "yellow"; // body
        ctx.fillRect(x, y, 20, 20);

        ctx.beginPath(); // head
        ctx.moveTo(x -10, y + 5);
        ctx.lineTo(x, y + 20);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath(); // tail
        ctx.moveTo(x + 18, y + 5);
        ctx.lineTo(x + 30, y + 20);
        ctx.lineTo(x + 30, y);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "blue"; // eye
        ctx.fillRect(
            x-2, y + 5,
            3, 3,
        );

    }
}