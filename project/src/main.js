import { Game } from "./core/Game";
import { Player } from "./components/Player";
import { Light } from "./components/Light";
import { Skybox } from "./components/Skybox";
import { Cube } from "./components/Cube";

const game = new Game();
const player = new Player();
const light = new Light();
const cube = new Cube(2);
const skybox = new Skybox();

skybox.addToScene(game.scene);
game.add(light)
game.addPlayer(player);
game.add(cube);

game.start();