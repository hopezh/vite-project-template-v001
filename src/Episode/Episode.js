import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";

// prettier-ignore
export default class Episode 
{
    constructor (canvas)
    {
        console.log('hello new Episode');

        // global access
        // window.episode = this; 

        // options
        this.canvas = canvas;
        // console.log(this.canvas); 

        // setup
        this.sizes = new Sizes()
        // listen, if window_is_resized is triggered, run the call back func 
        // ...note that arrow func, not a traditional func, must be used here
        // ...so as not to lose the context for "this" 
        this.sizes.on('window_is_resized', () => {
            console.log('i heard that window is resized...'); 
            this.resize(); 
        })

        this.time = new Time()
    }

    // resize func
    resize()
    {
        console.log('...so, doing some resize shit...')
    }
}
