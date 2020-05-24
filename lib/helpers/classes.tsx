
function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(" ");
}

export default classes

function scopedClassMaker(prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join("-");
    };

}

export {
    scopedClassMaker
} ;
