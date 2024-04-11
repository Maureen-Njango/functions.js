let arrayFruits = ["apples", "kiwi", "banana", "guava"]
function arraysort() {
    arrayFruits.sort()
    arrayFruits.reverse()
    return arrayFruits;
}


console.log(arraysort(arrayFruits))

//
var num = [40, 60, -30, -45]
function array() {
    let newnum =num.filter((element)=>
   Element<0);
   let zero = num.filter ((element)=>
   element==0);
   return{}
}



//

//4
function multiply2(numbers){
    numbers.forEach(number=>
      {console.log(number *2)}  )
}
let numbers = [46,89,6,7,45]
//5
function manipulateArray(arr) {
  for(let i= 0; i < 4 && i< arr.length; i++){

}
for(let i=arr.length -2;i<arr.length; i++){
    arr[1] +=5
}

console.log(arr)
}
const arr = [3,4,5,6,7,8,9,8,40,50];
manipulateArray(arr);


//2
function checkArray(arr1) {
    for (let i = 0; i<arr.length; i++) {
    if (arr[i] > 0) {
        arr[i] = "positive";
    }else if (arr[i]<0) {
       arr[i]  = "negative";

    }else{
        arr[i] = "zero";
    }
}
return arr
}
let arr1 =  [0,5,-9,6]
console.log(arr1)

//3
let arrayOfStr = [
    {"id" :"mawii123",
    "name" :"vee123",
    "salary" :9000

    },
    {"id" :"njango123",
    "name" :"viola12",
    "salary" :8000

    },
    {"id" :"sambira12",
    "name":"ngendombira",
    "salary":1000

    },
    {"id":"annmbira",
    "name":"mbirawanjiru",
    "salary":90000

    }

]
let sortedArrayOfStr = arrayOfStr.sort(
    (salary1,salary2) => (salary1.salary< salary2.salary)? -1 :(salary1.salary2>salary2.salary)?
   1:0)
   console.log(sortedArrayOfStr)
