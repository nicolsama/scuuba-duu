export default class SandDollar {
    constructor() {
        this.width = 10;
        this.height = 10;
    }

    render(ctx, x, y) {
            ctx.fillStyle = "pink"
            ctx.fillRect(
                x, y,
                this.width, this.height,
            );
    }
}