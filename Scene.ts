/**
 * 
 */
export class Scene {
    /**
     * 
     */
    private name: string = '';
    /**
     * 
     */
    constructor(name: string) {
        this.name = name;
    }
    /**
     * 
     */
    public start(): void {
        console.log("start:" + this.name);
    }
    /**
     * 
     */
    public update(dt: number): void {
        console.log("update:" + this.name);
    }
    /**
     * 
     */
    public stop(): void {
        console.log("stop:" + this.name);
    }
    /**
     * 
     */
    public tearDown(): void {
        console.log("tearDown:" + this.name);
    }
}