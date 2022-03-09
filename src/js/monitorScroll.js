import eventEmitter from "./eventEmitter";

window.addEventListener('scroll', () => {
    eventEmitter.emit('scroll', window.scrollY)
})