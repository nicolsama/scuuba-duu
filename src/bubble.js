
export default class Bubble {

    constructor(ctx, canvasWidth, canvasHeight, addO2) {
        this.height = 20; 
        this.width = 20; 
        this.canvasWidth = canvasWidth; 
        this.canvasHeight = canvasHeight;
        this.ctx = ctx;
        // this.x = (Math.random() * this.canvasWidth); 
        this.y = this.canvasHeight - 60; 
        this.addO2 = addO2; 
        this.range = 20;
        this.popped = false; 

    }


    render(x) {
        if (!this.popped) {
            this.ctx.beginPath();
            this.ctx.arc(x, this.y, 10, 0, Math.PI * 2, true); 
            this.ctx.fillStyle = "lightblue";
            this.ctx.fill();
            this.ctx.closePath();
            this.y -= 1; 
        } else {
            null
        }


        let minX = ((this.canvasWidth / 2) - this.range);
        let maxX = ((this.canvasWidth / 2) + this.range);
        let minY = ((this.canvasHeight / 2) - this.range);
        let maxY = ((this.canvasHeight / 2) + this.range);
        let y = this.y;

        if ( x > minX && x < maxX && y > minY && y < maxY && !this.popped) {

            this.addO2(); // pass in the bubble to be deleted
            this.popped = true; 
        }
    }
}