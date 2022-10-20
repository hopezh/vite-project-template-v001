// prettier-ignore
export default class Sizes
{
    constructor ()
    {
        console.log('init Sizes')
        
        // setup 
        this.width      = window.innerWidth;
        this.height     = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    }
}
