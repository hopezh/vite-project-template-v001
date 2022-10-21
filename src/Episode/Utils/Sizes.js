import EventEmitter from "./EventEmitter.js"

// prettier-ignore
export default class Sizes extends EventEmitter 
{
    constructor ()
    {
        super() // call the inherited constructor
        
        // setup 
        this.width      = window.innerWidth;
        this.height     = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // resize event
        window.addEventListener('resize', () => {
            this.width      = window.innerWidth;
            this.height     = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);

            // trigger an event
            this.trigger('window_is_resized')
        })

        console.log('init Sizes')
    }
}
