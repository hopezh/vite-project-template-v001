import * as THREE from "three";
import Episode from "./Episode.js";

// prettier-ignore
export default class Renderer 
{
    constructor()
    {
        console.log('init Renderer')

        // [+] options
        this.episode = new Episode()
        this.canvas  = this.episode.canvas
        this.sizes   = this.episode.sizes
        this.scene   = this.episode.scene
        this.camera  = this.episode.camera

        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas, 
            antialias: true, 
        }) 

        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }
}
