export default class SandDollar {
    constructor(ctx, canvasHeight, canvasWidth, collectItems) {
        this.width = 10;
        this.height = 10;
        this.ctx = ctx; 
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.y = this.canvasHeight -30;
        this.range = 20;
        this.collected = false; 
        this.collectItems = collectItems; 
    }

    render(x) {
        x = parseInt(x);
        if (!this.collected) {
            this.ctx.fillStyle = "pink"
            this.ctx.fillRect(
                x, this.y,
                this.width, this.height,
            );
        } else {
            null
        }

            let minX = ((this.canvasWidth / 2) - this.range);
            let maxX = ((this.canvasWidth / 2) + this.range);
            let minY = ((this.canvasHeight / 2) - this.range);
            let maxY = ((this.canvasHeight / 2) + this.range);
            let y = this.y;

            if (x > minX && x < maxX && y > minY && y < maxY && !this.collected) {

                this.collectItems(this);
                this.collected = true;
        }
    }
}