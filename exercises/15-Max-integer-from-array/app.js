var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function findBiggest(){
    myArray.sort((a, b) => a - b);
    return myArray[myArray.length-1];
}
    console.log(findBiggest(myArray))