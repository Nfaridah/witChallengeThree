index = 0; 
name = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ]; 
  
square = x => Math.pow(x, 2); 
value = name.map(key => {
    var newObject = {};
    newObject[key] = square(key)
     return newObject;
    }
    );
console.log(value);


/*function functionName(x){
     Math.pow(x, 2);
 }*/
