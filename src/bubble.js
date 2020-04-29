
export default class Bubble {

    constructor(ctx, canvasWidth, canvasHeight, addO2) {
        this.height = 20; 
        this.width = 20; 
        this.canvasWidth = canvasWidth; 
        this.canvasHeight = canvasHeight;
        this.ctx = ctx;
        this.x = (Math.random() * this.canvasWidth); 
        this.y = this.canvasHeight - 30; 
        this.addO2 = addO2; 

    }


    render(x) {

        this.ctx.beginPath();
        this.ctx.arc(x, this.y, 10, 0, Math.PI * 2, true); // Outer circle
        this.ctx.fillStyle = "lightblue";
        this.ctx.fill();
        this.ctx.closePath();
        this.y -= 1; 
        
        if (x < (this.canvasWidth/2 + 20) &&
            x > (this.canvasWidth/2 - 20) && 
            this.y < (this.canvasWidth/2 - 20) &&
            this.y > (this.canvasWidth / 2 + 20)) {
            this.addO2();
        }
    }
}