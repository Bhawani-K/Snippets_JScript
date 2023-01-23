// REMOVE DUPLICATE ELEMENTS FROM AN ARRAY

const arr = [1,2,3,"ABC",1,3,7,"ABC"];

/***********************************************************************
    1. filter()
        - generates a new Array
***********************************************************************/

let method_1 = arr.filter((ele, index)=>{
    return arr.indexOf(ele) === index
})
console.log(method_1);

/***********************************************************************
    2. set()
        - The array is converted to Set and all the duplicate elements are automatically removed.
        - The spread syntax ... is used to include all the elements of the Set to a new array.
***********************************************************************/
let method_2 = [...new Set(arr)]
console.log(method_2);
/***********************************************************************
    3. forEach()
***********************************************************************/
function method_3(arr) {
    let Unique = []
    arr.forEach(ele => {
        if(!Unique.includes(ele)){
            Unique.push(ele)
        }
    });
    console.log(Unique);
}
method_3(arr)
/***********************************************************************
    4. reduce()
***********************************************************************/
var myOrderedArray  = arr.reduce(function(prev, curr){
    if(prev.indexOf(curr) === -1){
        prev.push(curr)
    }
    return prev;
},[])
console.log(myOrderedArray );
/***********************************************************************
    5. indexOf()
        - The for...of loop is used to loop through all the elements of an arr array.
        - The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push().
***********************************************************************/
function getUnique(arr){
    
    let uniqueArr = [];
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

// calling the function
// passing array argument
getUnique(arr);