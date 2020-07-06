let list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];

// your code here
function mergeTwoList(arr){
    let odd = [];
    let even = [];
    let final = [];
for(let i=0; i<arr.length; i++){
    if (arr[i]%2===0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
}

final.push(odd, even);

return final;
}

console.log(mergeTwoList(list_of_numbers))