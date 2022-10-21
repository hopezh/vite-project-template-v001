import EventEmitter from "./EventEmitter.js";

// prettier-ignore
export default class Time extends EventEmitter {
	constructor() {
		super();

		// setup
		this.start   = Date.now();
		this.current = this.start;
		this.elapsed = 0;
		this.delta   = 16;
        
        // this.tick() // don't call tick() directly, use the following 
        window.requestAnimationFrame(() => 
        {
            this.tick()
        })

		console.log("init Time");
	}

    tick ()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start
        // console.log(this.elapsed)

        // trigger an event
        this.trigger('there-is-a-tick')

        // pay attention, use arrow func to make the context of "this" correct
        window.requestAnimationFrame(() => 
        {
            this.tick()
        })
    }
}
