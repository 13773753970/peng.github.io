import eventEmitter from "./eventEmitter";

let timer

window.addEventListener('resize', e => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        eventEmitter.emit('resizeEnd', {x: window.innerWidth, y: window.innerHeight})
    }, 300)
}) 