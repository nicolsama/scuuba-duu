export default class StingRay {
    constructor(ctx, canvasHeight, canvasWidth, loseOxygen, x) {
        this.ctx = ctx; 
        this.x = x; 
        this.height = 50; 
        this.width = 50;
        this.loseOxygen = loseOxygen; 
        this.canvasHeight = canvasHeight; 
        this.canvasWidth = canvasWidth; 
        this.range = 80; 
    }

    render(y) {
        y = parseInt(y);
         this.ctx.fillStyle = "#d0c3d9";

        this.ctx.beginPath(); // body
        this.ctx.moveTo(this.x, y)
        this.ctx.lineTo(this.x + this.width / 4 + 40, y - 50);
        this.ctx.lineTo(this.x + this.width / 4 + 60, y);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath(); // body
        this.ctx.moveTo(this.x, y)
        this.ctx.lineTo(this.x + this.width / 4 + 60, y);
        this.ctx.lineTo(this.x + this.width / 4 + 40, y + 50);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath(); //tail
        this.ctx.moveTo(this.x, y + 5)
        this.ctx.lineTo(this.x + this.width, y + 5);
        this.ctx.lineTo(this.x - this.width, y - 9);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = "purple"; // eye
        this.ctx.fillRect(
            this.x+60, y + 10,
            3, 3,
        );
        this.ctx.fillRect(
            this.x + 60, y -10,
            3, 3,
        );

        this.x += 2; 

        let minX = ((this.canvasWidth / 2) - this.range);
        let maxX = ((this.canvasWidth / 2) + this.range);
        let minY = ((this.canvasHeight / 2) - this.range);
        let maxY = ((this.canvasHeight / 2) + this.range);
        let x = this.x;

        if (x > minX && x < maxX && y > minY && y < maxY) {
            this.loseOxygen(this);
        }

    }
}