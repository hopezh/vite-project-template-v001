import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";

// prettier-ignore
export default class Episode 
{
    static instance

    // [#] constructor
    constructor (canvas)
    {
        // [+] create a singleton 
        if (Episode.instance)
        {
            return Episode.instance;    // return the instance if it exists
        }
        Episode.instance = this; 

        console.log('hello new Episode');

        // [+] options
        this.canvas = canvas;

        // [+] setup 
        this.sizes  = new Sizes()          // [-] size   
        this.time   = new Time()           // [-] time
        this.scene  = new THREE.Scene()    // [-] scene
        this.camera = new Camera()         // [-] camera

        // [+] event
        // [-] window resize 
        // listen, and if window_is_resized is triggered, run the call back func 
        // ...note that arrow func, not a traditional func, must be used here
        // ...so as not to lose the context for "this" 
        this.sizes.on('window_is_resized', () => {
            // console.log('i heard that window is resized...'); 
            this.resize(); 
        })

        // [-] time tick update 
        this.time.on('there-is-a-tick', () => {
            // console.log('I heard that there is a tick...')
            this.update()
        })
    }

    // [#] resize func
    resize()
    {
        // console.log('...so, doing the resize shit...')
    }

    // [#] update func
    update()
    {
        // console.log('...so, doing updating shit at time:', this.time.current)
    }
}
