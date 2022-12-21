export function err(code,message){
    let e = new Error(message);

    if (code) {
        e.stack = code;
    }

    return e;
}