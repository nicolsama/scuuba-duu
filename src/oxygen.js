

export default class Oxygen {
    constructor() {

    }

    render(ctx, n, color) {
        ctx.fillStyle = "white"; // background
        ctx.fillRect(20, 20, 20, 100);
        ctx.fillStyle = color; // level
        ctx.fillRect(25, 20, 10, n);


    }
}