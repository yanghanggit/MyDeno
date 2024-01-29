/**
 * 
 */
import { Scene } from './Scene.ts';
/**
 * 
 */
export class Game {
    /**
     * 
     */
    private name: string = '';
    /**
     * 
     */
    private scene: Scene | null = null;
    /**
     * 
     */
    constructor(name: string) {
        this.name = name;
    }
    /**
     * 
     */
    public startWithScene(scene: Scene): void {
        console.log("start:" + this.name);
        this.scene = scene;
        this.scene.start();
    }
    /**
     * 
     */
    public update(dt: number): void {
        this.scene?.update(dt);
    }
    /**
     * 
     */
    public stop(): void {
        if (this.scene !== null) {
            this.scene.stop();
            this.scene.tearDown();
            this.scene = null;
        }
    }
}