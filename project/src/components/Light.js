import * as THREE from 'three';

export class Light extends THREE.DirectionalLight {
    constructor(color = 0xffffff, intensity = 1){
        super(color, intensity);
        
        // Imposta la posizione iniziale della luce
        this.position.set(0, 1, 1);
    }

    update(){
        // Cambia la posizione della luce nel tempo
        this.position.x = Math.sin(Date.now() * 0.001) * 10;
        console.log(this.position);
    }
}