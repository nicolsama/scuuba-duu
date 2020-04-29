export default class Score {
    constructor() {
    }
    
    render(ctx, score) {
        // ctx.fillStyle = "white"
        // ctx.fillRect(800, 20, 80, 50)
        ctx.fillStyle = "white";
        ctx.font = '20px Roboto Mono';
        ctx.fillText(score, 830, 50);
    }
}