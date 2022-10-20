import Sizes from "./Utils/Sizes.js";

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

    }
}
