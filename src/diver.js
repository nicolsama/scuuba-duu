export default class Diver {
    constructor() {
        this.width = 20;
        this.height = 20;
    }

    render(ctx, x, y, canvas) {

     
        ctx.fillStyle = "white"
        ctx.fillRect( // tank
            x - 16, y-15,
            this.width / 2.5, this.height * 1.5,
        );

        ctx.fillStyle = "yellow"
        ctx.fillRect( // left flipper
            x - 13, y+52,
            this.width/2, this.height * 1.5,
        );
        ctx.fillRect( // right flipper
            x, y+54,
            this.width/2, this.height * 1.5,
        );


        ctx.fillStyle = "black";
        ctx.fillRect( // head
            x-4, y-25,
            this.width/2, this.height-2,
        );
        ctx.fillRect( // body
            x - this.height/2, y - this.width/2,
            this.width, this.height * 2,
        );
        ctx.fillRect( // right upper leg
            x+2, y+30,
            this.width/3.5, this.height,
        );

        ctx.fillRect( // right upper leg
            x + 2, y+40,
            this.width / 5, this.height,
        );

        ctx.fillRect( // left upper leg
            x-7, y + 30,
            this.width / 3.5, this.height / 2,
        );
        ctx.fillRect( // right lower leg
            x-8, y + 40,
            this.width / 5, this.height,
        );

        ctx.fillStyle = "blue"
        ctx.fillRect( // goggles
            x-2, y - 22,
            this.width / 2, this.height / 5,
        );

    }
}