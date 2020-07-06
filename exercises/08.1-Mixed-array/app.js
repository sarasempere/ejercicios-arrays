var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let arrType = [];
for(let i=0; i<mix.length; i++){
    let elem = mix[i];
    let elementType = typeof(elem);
    arrType.push(elementType);
}

console.log(arrType);