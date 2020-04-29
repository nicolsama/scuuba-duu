import Diver from './diver.js';
import SandDollar from './sanddollar.js';
import Shark from './shark.js';
import Bubble from './bubble.js'; 
import ScoreBoard from './score.js';
import Oxygen from './oxygen.js';
import Fish from './fish.js';
import Coral from './coral.js';



export default class Game {
    constructor() {  
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.diver = new Diver(this.canvas.width / 2, this.canvas.height / 2);
        // this.sanddollar = new SandDollar(); // logic for points (pass in score to render ) // logic to randomize
        this.oxygenMeter = new Oxygen();
        this.oxygenLevel = 100;
        // this.fish = new Fish();
        // this.coral = new Coral(); 
        this.score = 0;
        this.scoreBoard = new ScoreBoard();
        this.fps = 8;
        this.meterColor = "limegreen";
        
        this.bubbles = {};
        this.sharks = {};
        
        this.running = false;
        this.isGameOver = false; 
        
        // setInterval Ids
        this.bubbleInterval = null; 
        this.oxygenInterval = null; 
        this.sharkInterval = null; 

        //initialize & bind
        this.gameOver = this.gameOver.bind(this);
        this.generateSharks = this.generateSharks.bind(this);
        this.deleteOldBubbles = this.deleteOldBubbles.bind(this);
        this.deleteOldSharks = this.deleteOldSharks.bind(this);
        this.getPoints = this.getPoints.bind(this);
        this.addOxygen = this.addOxygen.bind(this);
        this.loseOxygen = this.loseOxygen.bind(this);
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
        this.isGameOver = false;
        this.score = 0;
        this.oxygenLevel = 100;
        this.meterStatus();
        this.bubbles = {};
        this.sharks = {};
        this.render();
    }
    
    play() {
        this.running = true;
        this.render();
        this.bubbleInterval = setInterval(this.generateBubbles, 2000);
        this.oxygenInterval = setInterval(this.loseOxygen, 2000);
        this.sharkInterval = setInterval(this.generateSharks, 10000);
    }

    addOxygen() {
        console.log("Adding Oxygen");
        ((this.oxygenLevel + 20) > 100) ? 
            this.oxygenLevel = 100 : 
            this.oxygenLevel += 20;
        this.meterStatus();
    }

    loseOxygen() {
        this.oxygenLevel -= 5; 
        this.meterStatus();
    }

    meterStatus() {
        if (this.oxygenLevel >= 66) this.meterColor = "limegreen";
        if (this.oxygenLevel < 66) this.meterColor = "orange";
        if (this.oxygenLevel < 33) this.meterColor = "red";
    }

    getPoints() {
        this.score += 1; 
    }

    handleKeyDown(event) {
        if (!this.running) {
            this.play();
        } else {
            event.preventDefault();
            let newBubbles = this.bubbles; 
            let newSharks = this.sharks; 
            switch (event.keyCode) {
                case 38:
                    console.log("Up key is pressed");
                    // this.y += this.fps;
                    for (let bx in this.bubbles) {
                        this.bubbles[bx].y += this.fps;
                    }
                    for (let sy in this.sharks) {
                        let newY = parseInt(sy) + this.fps; 
                        newSharks[newY] = newSharks[sy]; 
                        delete newSharks[sy];
                    }
                    this.sharks = newSharks;
                    break;
                case 40:
                    console.log("Down key is pressed");
                    // this.y -= this.fps;
                    this.getPoints();
                    for (let bx in this.bubbles) {
                        this.bubbles[bx].y -= this.fps;
                    }
                    for (let sy in this.sharks) {
                        let newY = parseInt(sy) - this.fps;
                        newSharks[newY] = newSharks[sy];
                        delete newSharks[sy];
                    }
                    this.sharks = newSharks;
                    break;
                case 39:
                    console.log("Right key is pressed");
                    // this.x -= this.fps;
                    for (let sy in this.sharks) {
                        this.sharks[sy].x -= this.fps;
                    }
                    for (let bx in this.bubbles) {
                        let newX = parseInt(bx) - this.fps;
                        newBubbles[newX] = newBubbles[bx];
                        delete newBubbles[bx];
                    }
                    this.bubbles = newBubbles;
                    break;
                case 37:
                    console.log("Left key is pressed");
                    event.preventDefault();
                    // this.x += this.fps;
                    for (let sy in this.sharks) {
                        this.sharks[sy].x += this.fps;
                    }
                    for (let bx in newBubbles) {
                        let newX = parseInt(bx) + this.fps;
                        newBubbles[newX] = newBubbles[bx];
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
        this.oxygenMeter.render(this.ctx, this.oxygenLevel, this.meterColor);
        this.scoreBoard.render(this.ctx, this.score);
        // this.sanddollar.render(this.ctx, this.x + 40, this.y + 40);
        // this.fish.render(this.ctx, this.x + 250, this.y + 200);
        // this.coral.render(this.ctx, this.x - 250, this.y + 200, "orange");
        // this.coral.render(this.ctx, this.x - 200, this.y + 150, "hotpink");

        if (this.running && Object.values(this.bubbles).length > 0) {
            for (let bx in this.bubbles) {
                this.bubbles[bx].render(bx);
            }
        }
        if (this.running && Object.values(this.sharks).length > 0) {
            for (let sy in this.sharks) {
                this.sharks[sy].render(sy);
            }
        }

        if (this.oxygenLevel <= 0 && this.running) {
            clearInterval(bubbleInterval);
            this.gameOver();
        }

        if (this.running && (!this.isGameOver)) {         
            requestAnimationFrame(this.render.bind(this));
        }
    }

    gameOver() {
        this.running = false; 
        this.isGameOver = true;
        clearInterval(this.bubbleInterval); 
        clearInterval(this.sharkInterval); 
        clearInterval(this.oxygenInterval);
        // console.log("GAME OVER");
        // render game over screen
        alert("GameOVER"); // remove eventually 
        this.restart(); // setTimeout?
    }

    generateBubbles() {
        let bubbleX = Math.floor(Math.random() * this.canvas.width)
        let bubble = new Bubble(this.ctx, this.canvas.width, this.canvas.height, this.addOxygen);
        this.bubbles[bubbleX] = bubble; 
        this.deleteOldBubbles();

    }
    
    deleteOldBubbles() {
       for (let bx in this.bubbles) {
           (this.bubbles[bx].popped || this.bubbles[bx].y < 0) ? delete this.bubbles[bx] : null;      
       }
    }

    generateSharks() {
        let sharkY = Math.floor(Math.random() * this.canvas.height);
        let shark = new Shark(this.ctx, this.canvas.height, this.canvas.width, this.gameOver);
        debugger;
        this.sharks[sharkY] = shark;
        this.deleteOldSharks();
    }


    deleteOldSharks() {
        for (let sy in this.sharks) {
            (this.sharks[sy].x < -100) ? delete this.sharks[sy]: null;
        }
    }

}