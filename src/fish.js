export default class Fish {
    // this.ctx, color, this.canvas.height, this.canvas.width, this.collectItems);
    constructor(ctx, color, canvasHeight, canvasWidth, collectItems) {
        this.ctx = ctx; 
        this.x = canvasWidth + 30; 
        this.color = color; 
        this.collectItems = collectItems; 
    }
    
    render(y) {
        y = parseInt(y);

        this.ctx.fillStyle = this.color; // body
        this.ctx.fillRect(this.x, y, 20, 20);

        this.ctx.beginPath(); // head
        this.ctx.moveTo(this.x -10, y + 5);
        this.ctx.lineTo(this.x, y + 20);
        this.ctx.lineTo(this.x, y);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath(); // tail
        this.ctx.moveTo(this.x + 18, y + 5);
        this.ctx.lineTo(this.x + 30, y + 20);
        this.ctx.lineTo(this.x + 30, y);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = "black"; // eye
        this.ctx.fillRect(
            this.x-2, y + 5,
            3, 3,
        );

        this.x -= 2;

    }
}