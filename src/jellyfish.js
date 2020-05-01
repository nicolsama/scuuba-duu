export default class JellyFish {
    constructor(ctx, canvasWidth, canvasHeight, jellyAttack) {
        this.ctx = ctx; 
        this.y = canvasHeight - 30;
        this.width = 30; 
        this.height = 30; 
        this.range = 40; 
        this.canvasHeight = canvasHeight; 
        this.canvasWidth = canvasWidth;
        this.jellyAttack = jellyAttack; 
    }

    render(x) {

        x = parseInt(x);
        let startAngle = 1.0 * Math.PI;
        let endAngle = 2.0 * Math.PI;

        this.ctx.fillStyle = "#8c94ff";
        this.ctx.fillRect( // leg
            x + 1, this.y,
            this.width / 10, this.height/3);

        this.ctx.fillRect( // leg
            x - 11, this.y,
            this.width / 10, this.height/3);

        this.ctx.fillRect( // leg
            x - 5, this.y,
            this.width / 10, this.height/3);

        this.ctx.fillRect( // leg
            x + 7, this.y,
            this.width / 10, this.height/3);


        this.ctx.beginPath(); // body
        this.ctx.arc(x, this.y, 14, endAngle, startAngle, true);
        this.ctx.closePath();
        this.ctx.fill();

        this.y -= 1.5;

        let minX = ((this.canvasWidth / 2) - this.range);
        let maxX = ((this.canvasWidth / 2) + this.range);
        let minY = ((this.canvasHeight / 2) - this.range);
        let maxY = ((this.canvasHeight / 2) + this.range);
        let y = this.y;

        if (x > minX && x < maxX && y > minY && y < maxY) {
            this.jellyAttack();
        }
    }
}