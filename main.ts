import { Game } from "./Game.ts"
import { Scene } from "./Scene.ts";

const game = new Game("hello game");
game.startWithScene(new Scene("hello scene"));
game.update(0);
game.stop();