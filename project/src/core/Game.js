import * as THREE from 'three';
import { Scene } from "./Scene";
import { Camera } from "./Camera";
import { Renderer } from "./Renderer";
import { Player } from "../components/Player";

export class Game {
    constructor() {
        this.scene = new Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.player = null;
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
                if(object instanceof Player){
                    this.camera.update(object);
                }
            }
        });
        this.renderer.render(this.scene, this.camera);
    }

    add(object) {
        this.objects.push(object);
        this.scene.add(object);
    }

    addPlayer(player){
        this.player = player;
        this.add(player);
    }
    
    stop() {
        this.renderer.dispose();
    }
}

