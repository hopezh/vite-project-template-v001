import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

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

        console.log('Hello, here is a new Episode.');

        // [+] options
        this.canvas = canvas;

        // [+] setup 
        this.sizes    = new Sizes()          // [-] size   
        this.time     = new Time()           // [-] time
        this.scene    = new THREE.Scene()    // [-] scene
        this.camera   = new Camera()         // [-] camera
        this.renderer = new Renderer()       // [-] renderer 

        // [+] event listener 

        // [-] window resize 
        this.sizes.on('window_is_resized', () => {
            /*
                Listen, and if window_is_resized is triggered, run call back func. 
                Note that arrow func, not a traditional func, must be used here, 
                ...so as not to lose the context for "this" 
            */

            // console.log('i heard that window is resized...'); 
            this.resize(); 
        })

        // [-] update with time tick 
        this.time.on('there-is-a-tick', () => {
            /*
                Listen, and if there-is-a-tick is triggered, run call back func. 
            */

            // console.log('I heard that there is a tick...')
            this.update()
        })
    }

    // [#] resize 
    resize()
    {
        /*
            This func will propagate to the children and their children  
            ...whenever a window resize event is triggered
            ...so, put all the resize() of the children here if they have one
        */

        // console.log('...so, I'll do the resize shit...')
        this.camera.resize()
        this.renderer.resize()
    }

    // [#] update 
    update()
    {
        /*
            This func will propagate to the children and their children
            ...whenever a tick event is triggered
            ...so, put all the update() of the children here if they have one
        */

        // console.log('...so, I'll do the update shit @:', this.time.current)
        this.camera.update() 
        this.renderer.update()  // Note: udpate camera before update renderer
    }
}
