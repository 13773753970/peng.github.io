import eventEmitter from "./eventEmitter";

let timer

window.addEventListener('scroll', e => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        eventEmitter.emit('scrollEnd', window.scrollY)
    }, 300)
}) 