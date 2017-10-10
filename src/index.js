import objectAssign from 'object-assign';
//Supposedly faster for v8 than just Object.create(null)
function Raw(){}
Raw.prototype = (()=>{
    //Maybe some old browser has risen from it's grave
    if(typeof Object.create !== 'function'){
        let temp = new Object();
        temp.__proto__ = null;
        return temp;
    }

    return Object.create(null);
})();

export default function rawObject(...objects){
    let raw = new Raw();
    objectAssign(raw, ...objects);
    return raw;
}
