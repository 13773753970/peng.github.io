import {debounce} from 'throttle-debounce'

function debounceMonitor(listeners, getCombinedValue, delay, callback) {
    let values = listeners.map(l => l.getValue())
    let combinedValue = getCombinedValue(...values)
    let realCombinedValue
    let debounceCallback = debounce(delay, true, (v) => {
        if (realCombinedValue === undefined || v !== realCombinedValue) {
            realCombinedValue = v
            callback(v)
        }
    })
    debounceCallback(combinedValue)
    let onCombinedValueStopChanging = (v) => {
        if (v !== realCombinedValue) {
            realCombinedValue = v
            callback(v)
        }
    }
    let timer
    for (let i = 0; i < listeners.length; i++) {
        listeners[i].listener(v => {
            values[i] = v
            let newCombinedValue = getCombinedValue(...values)
            if (newCombinedValue !== combinedValue) {
                combinedValue = newCombinedValue
                debounceCallback(combinedValue)
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => onCombinedValueStopChanging(combinedValue), 300)
            }
        })
    }
    return {
        changeState: (state) => {
            combinedValue = state
            realCombinedValue = state
            callback(state)
        }
    }
}

export default debounceMonitor