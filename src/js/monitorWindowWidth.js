import throttleListeners from 'throttle-listeners'
import eventEmitter from './eventEmitter'
import { debounce } from 'throttle-debounce'

throttleListeners(
    [{
        getDefaultValue: () => ({x: window.innerWidth, y: window.innerHeight}), 
        addListener: callback => eventEmitter.on('resize', callback),
        removeListener: callback => eventEmitter.removeListener('resize', callback)
    }],
    ({x: width}) => {
        if (width < 768) {
            return "smallWidth"
        } else if (width >= 768 && width < 992) {
            return "mediumWidth"
        } else {
            return "largeWidth"
        }
    },
    (state) => {
        setTimeout(() => eventEmitter.emit('widthChange', state), 0)
    },
    callback => debounce(200, false, callback)
)
