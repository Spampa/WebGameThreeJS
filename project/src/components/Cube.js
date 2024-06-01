import * as THREE from 'three';

export class Cube extends THREE.Mesh {
    constructor(size, color = 0xff0000){
        super(
            new THREE.BoxGeometry(size, size, size),
            new THREE.MeshBasicMaterial({ color: color}) 
        );
    }

    update(){
        this.rotation.x += 0.01;
        this.rotation.y += 0.01;
    }
}