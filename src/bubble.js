export default class Bubble {
    constructor() {
        this.height = 20; 
        this.width = 20; 
    }

    render(ctx, x, y) {
        ctx.fillStyle = "blue"
        ctx.fillRect( 
            x, y,
            this.width, this.height,
        );

        ctx.fillStyle = "white"
        ctx.fillRect(
            x + this.width / 6, y + this.width / 6,
            this.width/6, this.height/6,
        );
    }
}