export default class GameOver {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x; 
        this.y = y; 
    }

    render(finalscore) {
        this.ctx.fillStyle = "red";
        this.ctx.font = '50px Roboto Mono';
        this.ctx.fillText("DED DUUDE", this.x - 125, this.y -50);
        this.ctx.font = '20px Roboto Mono';
        this.ctx.fillStyle = "yellow";
        this.ctx.font = '20px Roboto Mono';
        this.ctx.fillText('Press any key to try again!', this.x - 150, this.y + 140);



    }

}