let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here


for(element in par){
    
    if(par[element] === " "){
        continue
    } else {
        let minus = par[element].toLowerCase()
        counts[minus]!==undefined ? counts[minus]++ : counts[minus]=1;
    }
    
}

console.log(counts)
