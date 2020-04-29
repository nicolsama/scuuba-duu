export default class Coral {
    constructor(ctx, color, canvasHeight, canvasWidth, collectItems) {
        this.ctx = ctx;
        this.color = color; 
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.y = this.canvasHeight - 30;
        this.collectItems = collectItems;
        this.collected = false;
        this.range = 20;

    }

    render(x) {
        x = parseInt(x);
        if (!this.collected) {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(x, this.y, 8, 40);
            this.ctx.fillRect(x +6, this.y + 10, 10, 8);
            this.ctx.fillRect(x - 10, this.y + 20, 10, 8);
        } else {
            null
        }


        let minX = ((this.canvasWidth / 2) - this.range);
        let maxX = ((this.canvasWidth / 2) + this.range);
        let minY = ((this.canvasHeight / 2) - this.range);
        let maxY = ((this.canvasHeight / 2) + this.range);
        let y = this.y;

        if (x > minX && x < maxX && y > minY && y < maxY && !this.collected) {
     
            this.collectItems();
            this.collected = true;
        }
    }
}