function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(" ");
}

export default classes;

interface classToggle {
    [key: string]: boolean
}

function scopedClassMaker(prefix: string) {
    return function (name?: string | classToggle, extraClass?: string) {
        // name 可以是对象，以className 为key, 是否显示该class 的布尔值 为value;
        return Object.entries(name instanceof Object ? name : {[name ? name : ""]: true})
            .filter(kv => kv[1])
            .map(kv => [prefix, kv[0]].filter(Boolean).join("-"))
            .concat(extraClass ? extraClass : [])
            .join(" ");
    };

}

export {
    scopedClassMaker,
} ;
