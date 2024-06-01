import * as THREE from 'three';

export class Skybox extends THREE.Mesh {
    constructor() {
        super();
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            'assets/textures/skybox/dark-s_px.jpg', // right
            'assets/textures/skybox/dark-s_nx.jpg', // left
            'assets/textures/skybox/dark-s_py.jpg', // top
            'assets/textures/skybox/dark-s_ny.jpg', // bottom
            'assets/textures/skybox/dark-s_pz.jpg', // back
            'assets/textures/skybox/dark-s_nz.jpg'  // front
        ]);

        this.texture = texture;
    }

    addToScene(scene){
        scene.background = this.texture;
    }
}