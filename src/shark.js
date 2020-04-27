export default class Shark {
    constructor() {
        this.height = 25;
        this.width = 80;
    }

    render(ctx, x, y) {
        
        ctx.fillStyle = "gray"; // body
        ctx.fillRect( 
        x, y,
        this.width, this.height,
        );

        ctx.beginPath(); // head
        ctx.moveTo(x-30, y+5);
        ctx.lineTo(x, y + this.height);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath(); // tail
        ctx.moveTo(x + this.width, y);
        ctx.lineTo(x + this.width + 20, y);
        ctx.lineTo(x + this.width, y + this.height);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath(); // tail
        ctx.moveTo(x + this.width, y + 5);
        ctx.lineTo(x + this.width - 10 + 40, y - 10);
        ctx.lineTo(x + this.width + 40, y + 25);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "grey"; // fin
        ctx.beginPath();
        ctx.moveTo(x + 30, y + 5)
        ctx.lineTo(x + this.width/4 + 40, y - 10);
        ctx.lineTo(x + this.width/4 + 40, y + 5);
        ctx.closePath();
        ctx.fill();


        ctx.fillStyle = "red"; // eye
        ctx.fillRect(
            x, y + 10 ,
            3, 3,
        );

    }
}