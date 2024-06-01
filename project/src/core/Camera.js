import * as THREE from 'three';

export class Camera extends THREE.PerspectiveCamera {
    constructor() {
        super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.position.z = 5;
        this.position.y = 2;
    }

    update(obj) {
        this.position.x = obj.position.x;
        this.position.z = obj.position.z + 5;
    }
}