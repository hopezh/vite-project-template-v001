import * as THREE from "three"; 
import Episode from "../Episode.js";
import Environ from './Environ.js'

// prettier-ignore
export default class World 
{
    constructor()
    {
        console.log('init World')
        
        this.episode = new Episode()
        this.scene = this.episode.scene 
        
        // test mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1), 
            new THREE.MeshBasicMaterial( { wireframe: true })
        ) 
        this.scene.add(testMesh)

        // setup 
        this.environ = new Environ()
    }

}
