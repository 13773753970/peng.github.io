import eventEmitter from "./eventEmitter";

window.addEventListener('resize', () => {
    eventEmitter.emit('resize', {x: window.innerWidth, y: window.innerHeight})
})