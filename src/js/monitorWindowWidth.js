import eventEmitter from './eventEmitter'
import debounceMonitor from './debounceMonitor'

let monitorWindowWidth = debounceMonitor(
    [{getValue: () => window.innerWidth, listener: (callback) => window.addEventListener('resize', () => callback(window.innerWidth))}],
    (width) => {
        if (width < 768) {
            return "smallWidth"
        } else if (width >= 768 && width < 992) {
            return "mediumWidth"
        } else {
            return "largeWidth"
        }
    },
    1000,
    (state) => {
        setTimeout(() => eventEmitter.emit('widthChange', state), 0)
    }
)

export default monitorWindowWidth
