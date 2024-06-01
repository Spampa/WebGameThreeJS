import * as THREE from 'three';

export class Player extends THREE.Mesh {
    constructor(speed = 0.1){
        super(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshPhongMaterial({ color: 0x00ff00 })
        );

        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;

        this.speed = speed;

        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    update(){
        if(this.moveForward) this.position.z -= this.speed;
        if(this.moveBackward) this.position.z += this.speed;
        if(this.moveLeft) this.position.x -= this.speed;
        if(this.moveRight) this.position.x += this.speed;
    }

    onKeyDown(event){
        switch(event.keyCode){
            case 87: // W
                this.moveForward = true;
                break;
            case 83: // S
                this.moveBackward = true;
                break;
            case 65: // A
                this.moveLeft = true;
                break;
            case 68: // D
                this.moveRight = true;
                break;
        }
    }

    onKeyUp(event){
        switch(event.keyCode){
            case 87: // W
                this.moveForward = false;
                break;
            case 83: // S
                this.moveBackward = false;
                break;
            case 65: // A
                this.moveLeft = false;
                break;
            case 68: // D
                this.moveRight = false;
                break;
        }
    }
}