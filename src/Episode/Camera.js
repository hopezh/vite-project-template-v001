import * as THREE from "three";
import Episode from './Episode.js';

// prettier-ignore
export default class Camera
{
    constructor()
    {
        this.episode = new Episode();
        console.log(this.episode)
    }
}
