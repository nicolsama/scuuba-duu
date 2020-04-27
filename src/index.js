import Game from './game.js'; 
import './styles/index.scss';
let game = new Game(); 

let x = 100; 
let y = 400; 

setInterval(game.render(x, y));
