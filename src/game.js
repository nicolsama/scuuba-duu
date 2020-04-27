import Diver from './diver.js';
import SandDollar from './sanddollar.js';
import Shark from './shark.js';
import Bubble from './bubble.js'; 

export default class Game {
    constructor() {
    
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    let rightPressed = false; 
    let leftPressed = false;
    this.diver = new Diver(); 
    this.sanddollar = new SandDollar();
    this.shark = new Shark(); 
    this.bubble = new Bubble(); 
    }



    render(x, y) {
        this.diver.render(this.ctx, x, y, this.canvas);

        this.sanddollar.render(this.ctx, this.x + 40, this.y + 40)
        this.shark.render(this.ctx, this.x + 200, this.y - 200);
        this.bubble.render(this.ctx, this.x - 200, this.y - 200)
        
    }
}