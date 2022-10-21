import * as THREE from "three";
import Episode from "./Episode.js";

// prettier-ignore
export default class Camera
{
    // [#] constructor
    constructor()   
    {
        // [+] options 
        this.episode = new Episode();
        this.sizes   = this.episode.sizes
        this.scene   = this.episode.scene
        this.canvas  = this.episode.canvas

        // [+] setup 
        this.setInstance()
    }

    // [#] setInstance 
    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width, 
            this.sizes.height,
            0.1, 
            100
        )

        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }
}
