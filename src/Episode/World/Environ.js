import * as THREE from 'three';
import Episode from '../Episode.js'

// prettier-ignore
export default class Environ
{
    constructor()
    {
        console.log('init Environ')

        this.episode = new Episode()
        this.scene = this.episode.scene

    }
}
