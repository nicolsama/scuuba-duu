export default class StingRay {
    constructor(ctx, x) {
        this.ctx = ctx; 
        this.x = x; 
        this.height = 50; 
        this.width = 50;
        // this.y = y;
    }

    render(y) {
         this.ctx.fillStyle = "#86b8af"; 

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

    }
}