import React, { useEffect, useState } from "react";
import {getWidthScope, eventEmitter, WidthScope} from '../helper'

interface WidthScopeProps {
    widthScope: WidthScope
}

function monitorWindowWidth<P extends WidthScopeProps>(Component: React.ComponentType<P>) {
    return (props: Omit<P, "widthScope">) => {
        const [width, setWidth] = useState(getWidthScope(window.innerWidth))
        useEffect(() => {
            const setWidthScope = (scope: WidthScope) => setWidth(scope)
            eventEmitter.on('widthChange', setWidthScope)
            return () => {eventEmitter.off('widthChange', setWidthScope)}
        }, [])
        return <Component {...props as P} widthScope={width}/>
    }
}

export default monitorWindowWidth

