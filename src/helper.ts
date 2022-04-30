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

export function loadJS(id: string, url: string, callback: () => void){
    const script: any = document.createElement('script')
    const fn = callback || function(){};
    script.type = 'text/javascript';
    script.id = id
    if (document.getElementById(id)) return
    //IE
    if(script.readyState){
        script.onreadystatechange = function(){
            if( script.readyState === 'loaded' || script.readyState === 'complete' ){
                script.onreadystatechange = null;
                fn();
            }
        }
    }else{
        //其他浏览器
        script.onload = function(){
            fn();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
