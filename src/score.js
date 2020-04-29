export default class Score {
    constructor() {

    }
    
    render(ctx, score) {
        ctx.fillStyle = "white"
        ctx.fillRect(800, 20, 80, 50)
        ctx.fillStyle = "blue"

        ctx.font = '16px monospace';
        ctx.fillText(score, 830, 50);
    }
}