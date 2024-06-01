import { Game } from "./core/Game";
import { Player } from "./components/Player";
import { Light } from "./components/Light";

const game = new Game();
const player = new Player();
const light = new Light();

game.add(light)
game.add(player);

game.start();