import { Scene } from "./Scene";
import { Camera } from "./Camera";
import { Renderer } from "./Renderer";

export class Game {
    constructor() {
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.objects = [];
    }

    start() {
        this.renderer.render(this.scene, this.camera);
        this.animate();
    }

    animate(){
        requestAnimationFrame(this.animate.bind(this));
        this.objects.forEach(object => {
            if(typeof object.update === 'function'){
                object.update()
            }
        });
        this.renderer.render(this.scene, this.camera);
    }

    add(object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    stop() {
        this.renderer.dispose();
    }
}

