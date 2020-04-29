export default class Shark {
    constructor(ctx, canvasHeight, canvasWidth, gameOver) {
        this.height = 25;
        this.width = 80;

        this.canvasHeight = canvasHeight; 
        this.canvasWidth = canvasWidth;
        this.x = this.canvasWidth + 100;
        this.ctx = ctx; 

        this.range = 20;
        this.gameOver = gameOver;
    }

    render(y) {
        y = parseInt(y);

        this.ctx.fillStyle = "gray"; // body
        this.ctx.fillRect( 
        this.x, y,
        this.width, this.height,
        );

        this.ctx.beginPath(); // head
        this.ctx.moveTo(this.x-30, y+5);
        this.ctx.lineTo(this.x, y + this.height);
        this.ctx.lineTo(this.x, y);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath(); // tail
        this.ctx.moveTo(this.x + this.width, y);
        this.ctx.lineTo(this.x + this.width + 20, y);
        this.ctx.lineTo(this.x + this.width, y + this.height);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath(); // tail
        this.ctx.moveTo(this.x + this.width, y + 5);
        this.ctx.lineTo(this.x + this.width - 10 + 40, y - 10);
        this.ctx.lineTo(this.x + this.width + 40, y + 25);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = "grey"; // fin
        this.ctx.beginPath();
        this.ctx.moveTo(this.x + 30, y + 5)
        this.ctx.lineTo(this.x + this.width/4 + 40, y - 10);
        this.ctx.lineTo(this.x + this.width/4 + 40, y + 5);
        this.ctx.closePath();
        this.ctx.fill();


        this.ctx.fillStyle = "red"; // eye
        this.ctx.fillRect(
            this.x, y + 10 ,
            3, 3,
        );

        this.x -= 5;

        let minX = ((this.canvasWidth / 2) - this.range);
        let maxX = ((this.canvasWidth / 2) + this.range);
        let minY = ((this.canvasHeight / 2) - this.range);
        let maxY = ((this.canvasHeight / 2) + this.range);
        let x = this.x;

        if (x > minX && x < maxX && y > minY && y < maxY) {
            this.gameOver();
        }
    }
}