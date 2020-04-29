export default class Coral {
    constructor() {

    }

    render(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 8, 40);
        ctx.fillRect(x +6, y + 10, 10, 8);
        ctx.fillRect(x - 10, y + 20, 10, 8);
    }
}