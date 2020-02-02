export class JsxElementUtil {
    static emit = (selector, eventName, data) => {
        let domElement =  document.querySelector(selector);
        if(domElement) {
            domElement.dispatchEvent(new CustomEvent(eventName, { detail: data }))
        }
    }

    static on = (selector, eventName, callback) => {
        let domElement =  document.querySelector(selector);
        if(domElement) {
            domElement.addEventListener(eventName,(event)=>{
                callback(event.detail,event)
            });
        }
    }
}

