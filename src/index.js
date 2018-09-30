// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {

};
const createNotEnumerableProperty = () => {
return Symbol("fo");
}

const createProtoMagicObject = () => {
    return Function;
};
const incrementor = () => {
    if( Object.index==undefined) Object.index=1;
    else Object.index+=1;
    function miniincr() {
        Object.index+=1;
        return miniincr;
    }
    miniincr.toString= function() {
        return Object.index;
    }
    return miniincr;
};
const asyncIncrementor = () => {
    if( Object.index==undefined) Object.index=1;
    else Object.index+=1;
    function miniincr() {
        Object.index+=1;
        return miniincr;
    }
    miniincr.toString= function() {
        return Object.index;
    }
    return Promise.resolve(Object.index-15);
     
};
const createIncrementer = () => {
    function iterator(){
        this.index=0;
        this.next=function (){
            return {
                value: this.index+=1, 
                done: false
            }
        }
    }
    var myiterator=new iterator();
    myiterator[Symbol.iterator]=function(){
        return this
    }
    return myiterator;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {
    
    console.log(a);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;