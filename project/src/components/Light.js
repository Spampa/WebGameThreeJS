import * as THREE from 'three';

export class Light extends THREE.DirectionalLight {
    constructor(color = 0xffffff, intensity = 20){
        super(color, intensity);
        
        // Imposta la posizione iniziale della luce
        this.position.set(-10, 10, 8);
    }
}