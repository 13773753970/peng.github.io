import EventEmitter from "eventemitter3"

export const eventEmitter = new EventEmitter()

export enum WidthScope {
    SmallWidth,
    MediumWidth,
    LargeWidth 
}

export function getWidthScope(width: number) {
    if (width < 768) {
        return WidthScope.SmallWidth
    } else if (width >= 768 && width < 992) {
        return WidthScope.MediumWidth
    } else {
        return WidthScope.LargeWidth
    }
}