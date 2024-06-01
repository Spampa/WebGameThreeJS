import * as THREE from 'three';

export class Cube extends THREE.Mesh {
    constructor(size, color = 0xff0000){
        const texture = new THREE.TextureLoader().load(
            'assets/textures/materials/dark-s_nx.jpg',
            () => {
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(1, 1);
            },
            () => {
                console.log('Texture loading started');
            },
            () => {
                console.log('Texture loading completed');
            }
        );

        super(
            new THREE.BoxGeometry(size, size, size),
            new THREE.MeshBasicMaterial({ map: texture })
        );
    }

    update(){
        this.rotation.x += 0.01;
        this.rotation.y += 0.01;
    }
}