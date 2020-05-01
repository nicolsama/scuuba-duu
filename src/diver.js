export default class Diver {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.paralyzed = false; 

        this.unParalyze = this.unParalyze.bind(this);
    }

    toggleParalyze() {
        this.paralyzed = !this.paralyzed; 
    }

    unParalyze() {
        this.paralyzed = false;
    }

    render(ctx) {

        let color = (this.paralyzed) ? "#6e78ff" : "black";

        ctx.fillStyle = "white"
        ctx.fillRect( // tank
            this.x - 16, this.y-15,
            this.width / 2.5, this.height * 1.5,
        );

        ctx.fillStyle = "yellow"
        ctx.fillRect( // left flipper
            this.x - 13, this.y+52,
            this.width/2, this.height * 1.5,
        );
        ctx.fillRect( // right flipper
            this.x, this.y+54,
            this.width/2, this.height * 1.5,
        );


        ctx.fillStyle = color;
        ctx.fillRect( // head
            this.x-4, this.y-25,
            this.width/2, this.height-2,
        );
        ctx.fillRect( // body
            this.x - this.height/2, this.y - this.width/2,
            this.width, this.height * 2,
        );
        ctx.fillRect( // right upper leg
            this.x+2, this.y+30,
            this.width/3.5, this.height,
        );

        ctx.fillRect( // right upper leg
            this.x + 2, this.y+40,
            this.width / 5, this.height,
        );

        ctx.fillRect( // left upper leg
            this.x-7, this.y + 30,
            this.width / 3.5, this.height / 2,
        );
        ctx.fillRect( // right lower leg
            this.x-8, this.y + 40,
            this.width / 5, this.height,
        );

        ctx.fillStyle = "blue"
        ctx.fillRect( // goggles
            this.x-2, this.y - 22,
            this.width / 2, this.height / 5,
        );

    }
}