import Diver from './diver.js';
import SandDollar from './sanddollar.js';
import Shark from './shark.js';
import Bubble from './bubble.js'; 
import ScoreBoard from './score.js';
import Oxygen from './oxygen.js';
import Fish from './fish.js';
import Coral from './coral.js';
import StartScreen from './start_screen.js';
import StingRay from './stingray.js';
import JellyFish from './jellyfish'; 


export default class Game {
    constructor() {  
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;

        this.oxygenMeter = new Oxygen();
        this.diver = new Diver(this.canvas.width / 2, this.canvas.height / 2);
        this.scoreBoard = new ScoreBoard();
        this.startScreen = new StartScreen(this.ctx, this.x, this.y);

        this.meterColor = "lightblue";
        this.score = 0;
        this.itemCount = 0;
        this.fishCount = 0; 
        this.oxygenLevel = 100;
        this.fps = 7;
        
        // keys 
        this.rightPressed = false;
        this.leftPressed = false; 
        this.upPressed = false; 
        this.downPressed = false; 
        
        // currently rendered objs
        this.bubbles = {};
        this.sharks = {};
        this.items = {};
        
        // gameState
        this.running = false;
        this.isGameOver = false; 
        this.usernameSubmitted = false; 
        
        // setInterval Ids
        this.bubbleInterval = null; 
        this.oxygenInterval = null; 
        this.sharkInterval = null; 
        this.itemInterval = null; 
        
        //initialize & bind
        this.render = this.render.bind(this);
        this.draw = this.draw.bind(this); 
        this.generateSharksAndFish = this.generateSharksAndFish.bind(this);
        this.generateBubbles = this.generateBubbles.bind(this);
        this.generateItems = this.generateItems.bind(this);
        this.deleteOldBubbles = this.deleteOldBubbles.bind(this);
        this.deleteOldSharksAndFish = this.deleteOldSharksAndFish.bind(this);
        this.getDivePoints = this.getDivePoints.bind(this);
        this.collectItems = this.collectItems.bind(this);
        this.addOxygen = this.addOxygen.bind(this);
        this.loseOxygen = this.loseOxygen.bind(this);
        this.jellyAttack = this.jellyAttack.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this); 
        this.gameOver = this.gameOver.bind(this);
        this.initializeEvents();
        this.restart();
    }

    initializeEvents() {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    restart() {
        this.usernameSubmitted = false; 
        this.running = false; 
        this.isGameOver = false;
        this.score = 0;
        this.oxygenLevel = 100;
        this.bubbles = {};
        this.items = {};
        this.sharks = {};
        this.meterStatus();
        this.render();
        this.startScreen.render();
    }
    
    play() {
        this.running = true;
        this.render();
        this.bubbleInterval = setInterval(this.generateBubbles, 2000);
        this.oxygenInterval = setInterval(this.loseOxygen, 2000);
        this.sharkInterval = setInterval(this.generateSharksAndFish, 6000);
        this.itemInterval = setInterval(this.generateItems, 1000)
    }

    addOxygen() {
        ((this.oxygenLevel + 20) > 100) ? 
            this.oxygenLevel = 100 : 
            this.oxygenLevel += 20;
        this.meterStatus();
    }

    loseOxygen(attack) {
        if (attack instanceof StingRay) {
            this.oxygenLevel -= .5; 
        } else {
            if ((this.oxygenLevel - 10) < 0 ) {
                this.oxygenLevel = 0
            } else {
                this.oxygenLevel -= 10;
            }
        }
        this.meterStatus();
    }

    
    meterStatus() {
        if (this.oxygenLevel >= 66) this.meterColor = "lightblue";
        if (this.oxygenLevel < 66) this.meterColor = "orange";
        if (this.oxygenLevel < 33) this.meterColor = "red";
    }
    
    jellyAttack() {
        this.diver.toggleParalyze();
        setTimeout(this.diver.unParalyze.bind(this.diver), 2000)
    }

    getDivePoints() {
        this.score += 1; 
    }

    collectItems(item) {
        if (item instanceof SandDollar) {
            this.score += 5
        } else if (item instanceof Coral) {
            this.score += 10
        }
    }

    draw() {

        let newBubbles = this.bubbles;
        let newSharks = this.sharks;
        let newItems = this.items;

        if (this.upPressed) {
            for (let bx in this.bubbles) {
                this.bubbles[bx].y += this.fps;
            }
            for (let ix in this.items) {
                this.items[ix].y += this.fps;
            }
            for (let sy in this.sharks) {
                let newY = parseInt(sy) + this.fps;
                newSharks[newY] = newSharks[sy];
                delete newSharks[sy];
            }
            this.sharks = newSharks;
        }

        if (this.downPressed) {
            this.getDivePoints();
            for (let bx in this.bubbles) {
                this.bubbles[bx].y -= this.fps;
            }
            for (let ix in this.items) {
                this.items[ix].y -= this.fps;
            }
            for (let sy in this.sharks) {
                let newY = parseInt(sy) - this.fps;
                newSharks[newY] = newSharks[sy];
                delete newSharks[sy];
            }
            this.sharks = newSharks;
        }

        if (this.rightPressed) {
             for (let sy in this.sharks) {
                 this.sharks[sy].x -= this.fps;
             }
             for (let bx in this.bubbles) {
                 let newX = parseInt(bx) - this.fps;
                 newBubbles[newX] = newBubbles[bx];
                 delete newBubbles[bx];
             }
             for (let ix in this.items) {
                 let newX = parseInt(ix) - this.fps;
                 newItems[newX] = newItems[ix];
                 delete newItems[ix];
             }
             this.items = newItems;
             this.bubbles = newBubbles;
        }

        if (this.leftPressed) {
             for (let sy in this.sharks) {
                 this.sharks[sy].x += this.fps;
             }
             for (let bx in newBubbles) {
                 let newX = parseInt(bx) + this.fps;
                 newBubbles[newX] = newBubbles[bx];
                 delete newBubbles[bx];
             }
             for (let ix in this.items) {
                 let newX = parseInt(ix) + this.fps;
                 newItems[newX] = newItems[ix];
                 delete newItems[ix];
             }
             this.items = newItems;
             this.bubbles = newBubbles;
        }

    }

    handleKeyUp() {
        this.upPressed = false; 
        this.downPressed = false; 
        this.rightPressed = false; 
        this.leftPressed = false; 
    }

    handleKeyDown(event) {
        if (this.diver.paralyzed) {
            event.preventDefault();
            return null;
        }

        if (this.usernameSubmitted) event.preventDefault();

        if (this.isGameOver && this.usernameSubmitted) {
            this.restart();
            return 
        }

        if (!this.running && (!this.isGameOver)) {
            this.play();
        } else if (this.running) {
            event.preventDefault();
            switch (event.keyCode) {
                case 38:
                    this.upPressed = true; 
                    break;
                case 40:
                        this.downPressed = true; 
                    break;
                case 39:
                        this.rightPressed = true; 
                    break;
                case 37:
                    event.preventDefault();
                    this.leftPressed = true; 
                    break;
            }
        }
    }

    render() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.diver.render(this.ctx);
        this.oxygenMeter.render(this.ctx, this.oxygenLevel, this.meterColor);
        this.scoreBoard.render(this.ctx, this.score);

        this.draw();


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

        if (this.running && Object.values(this.items).length > 0) {
            for (let ix in this.items) {
                this.items[ix].render(ix);
            }
        }

        if (this.oxygenLevel <= 0 && this.running) {
            this.gameOver();
        }

        if (this.running && (!this.isGameOver)) {         
            requestAnimationFrame(this.render.bind(this));
        }

    }

    gameOver() {
        this.running = false; 
        this.isGameOver = true;
        let inputName = document.getElementById("input-username");
        inputName.classList.remove("hidden");
        clearInterval(this.bubbleInterval);
        clearInterval(this.sharkInterval);
        clearInterval(this.oxygenInterval);
        clearInterval(this.itemInterval);
    }

    generateBubbles() {
        let bubbleX = Math.floor(Math.random() * this.canvas.width)
        let bubble = new Bubble(this.ctx, this.canvas.width, this.canvas.height, this.addOxygen);
        this.bubbles[bubbleX] = bubble;
        
        let jellyX = Math.floor(Math.random() * this.canvas.width)
        let jellyfish = new JellyFish(this.ctx, this.canvas.width, this.canvas.height, this.jellyAttack);
        this.bubbles[jellyX] = jellyfish;

        this.deleteOldBubbles();

    }
    
    deleteOldBubbles() {
       for (let bx in this.bubbles) {
           (this.bubbles[bx].popped || this.bubbles[bx].y < 0) ? delete this.bubbles[bx] : null;      
       }
    }

    generateSharksAndFish() {
        const fishColors = ["blue", "yellow"]
        let y = Math.floor(Math.random() * this.canvas.height);

        let fish; 
        if (this.fishCount % 3 === 0) {
            fish = new Shark(this.ctx, this.canvas.height, this.canvas.width, this.gameOver);
        } else if (this.fishCount % 3 === 1) {
            let color = fishColors[Math.floor(Math.random() * 2)];
            fish = new Fish(this.ctx, color, this.canvas.height, this.canvas.width, this.collectItems);
        } else if (this.fishCount % 3 === 2) {
            fish = new StingRay(this.ctx, this.canvas.height, this.canvas.width, this.loseOxygen, -100);
        }

        this.sharks[y] = fish;
        this.fishCount += 1;
        this.deleteOldSharksAndFish();
    }


    deleteOldSharksAndFish() {
        for (let sy in this.sharks) {
            if (this.sharks[sy] instanceof StingRay) {
                (this.sharks[sy].x > this.canvas.width + 100) ? delete this.sharks[sy]: null;
            } else {
                (this.sharks[sy].x < -100) ? delete this.sharks[sy]: null;
            
            }
        }
    }

    generateItems() {
        const coralColors = ["hotpink", "teal", "orange", "red", "pink"];

        let item; 
        let itemX = Math.floor(Math.random() * this.canvas.width); 

        if (this.itemCount % 2 === 0) {
            item = new SandDollar(this.ctx, this.canvas.height, this.canvas.width, this.collectItems);
    
        } else {
            let color = coralColors[Math.floor(Math.random() * 4)];
            item = new Coral(this.ctx, color, this.canvas.height, this.canvas.width, this.collectItems);
        }

        this.items[itemX] = item; 
        this.itemCount += 1;

        for (let x in this.items) {
            (this.items[x].y < -100) ? delete this.items[x] : null; 
        }
    }

}