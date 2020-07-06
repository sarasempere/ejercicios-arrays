var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
        /* for(let i=0; i<people.length;i++){
         let nombre = people[i];
         if(nombre===personName){
            people.splice(people.indexOf(people[i]),1);
         }
         
     }
     return people;*/
     let finalArr = [];
     for(let i=0; i<people.length;i++){
        let nombre = people[i];
        if(nombre===personName){
             newArr = people.slice(people.indexOf(people[0]), people.indexOf(people[i]));
             newArr2 = people.slice(people.indexOf(people[i+1], people[people.length-1]));   
             finalArr.push(newArr.concat(newArr2));
         }
        
     }

     if(finalArr.length===0){
         return people;
     }else{
        return finalArr;
     }
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

//Si el array inicial se modifica por el método splice, no es posible obtener los resultados del ejemplo.