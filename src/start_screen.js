export default class StartScreen {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x; 
        this.y = y; 
    }

    render() {
        this.ctx.fillStyle = "red";
        this.ctx.font = '50px Roboto Mono';
        this.ctx.fillText("Scuuba Duu", this.x - 148, this.y);
        this.ctx.font = '20px Roboto Mono';
        this.ctx.fillStyle = "white";
        this.ctx.fillText('(Press any key to start)', this.x - 142, this.y + 50);
    }

}