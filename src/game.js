import Diver from './diver.js';
import SandDollar from './sanddollar.js';
import Shark from './shark.js';
import Bubble from './bubble.js'; 
// import Score from './score.js';
// import * as keys from './keys.js
import Oxygen from './oxygen.js';
import Fish from './fish.js';
import Coral from './coral.js';



export default class Game {
    constructor() {  
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.diver = new Diver(this.canvas.width / 2, this.canvas.height / 2); // pass in keys 
    this.sanddollar = new SandDollar(); // logic for points (pass in score to render ) // logic to randomize
    this.shark = new Shark(); // logic for end game? // logic to randomize
    this.oxygenMeter = new Oxygen();
    this.oxygenLevel = 100;
    this.fish = new Fish();
    this.coral = new Coral(); 
    this.score = 0;
    this.running = false;
    this.bubbles = {};
    this.fps = 15;
    this.meterColor = "limegreen";


    this.addO2 = this.addO2.bind(this);
    this.loseO2 = this.loseO2.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.generateBubbles = this.generateBubbles.bind(this);
    this.render = this.render.bind(this);
    this.initializeEvents();
    this.restart();


    }

    initializeEvents() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    restart() {
        this.running = false;
        this.score = 0;

        this.render();
    }

    addO2() {
        debugger; 
    }

    loseO2() {
        this.oxygenLevel -= 5; 
        if (this.oxygenLevel < 66) {
            this.meterColor = "orange";
        } 
        
        if (this.oxygenLevel < 33) {
            this.meterColor = "red";
        }
    }

    play() {
        this.running = true;
        this.render();
        setInterval(this.generateBubbles, 1000)
        setInterval(this.loseO2, 1000)
    }

    handleKeyDown(event) {
        if (!this.running) {
            this.play();
        } else {
            event.preventDefault();
            let newBubbles = this.bubbles; 
            switch (event.keyCode) {
                case 38:
                    console.log("Up key is pressed");
                    this.y += this.fps;
                    break;
                case 40:
                    console.log("Down key is pressed");
                    this.y -= this.fps;
                    break;
                case 39:
                    console.log("Right key is pressed");
                    this.x -= this.fps;
                    // this.ctx.translate(-this.fps, 0)
                        for (let bx in this.bubbles) {
                            let newX = parseInt(bx) - this.fps;
                            newBubbles[newX] = newBubbles[bx];
                            delete newBubbles[bx];
                        }
                        this.bubbles = newBubbles;

                    break;
                case 37:
                    debugger;

                    console.log("Left key is pressed");
                    event.preventDefault();
                    this.x += this.fps;
                        for (let bx in newBubbles) {
                            debugger; 

                            let newX = parseInt(bx) + this.fps;
                            newBubbles[newX] = newBubbles[bx];
                            debugger;
                            delete newBubbles[bx];
                        }
                            this.bubbles = newBubbles;

                    break;
            }
        }
    }

    render() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.diver.render(this.ctx);
        this.sanddollar.render(this.ctx, this.x + 40, this.y + 40);
        this.shark.render(this.ctx, this.x + 200, this.y - 200);
        this.oxygenMeter.render(this.ctx, this.oxygenLevel, this.meterColor);
        this.fish.render(this.ctx, this.x + 250, this.y + 200);
        this.coral.render(this.ctx, this.x - 250, this.y + 200, "orange");
        this.coral.render(this.ctx, this.x - 200, this.y + 150, "hotpink");

      
        for (let x in this.bubbles) {
            this.bubbles[x](x);
        }

        if (this.running) {         
            requestAnimationFrame(this.render.bind(this));
        }
    }

    generateBubbles() {
        let bubbleX = Math.floor(Math.random() * this.canvas.width)
        let bubble = new Bubble(this.ctx, this.canvas.width, this.canvas.height, this.addO2);
        this.bubbles[bubbleX] = bubble.render.bind(bubble);
    }
    
}