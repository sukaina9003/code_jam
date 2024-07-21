//reverse an array
function reverse_array(){
    let arr=["karachi","lahore","hyderabad"]
    let new_arr=arr.reverse()
    console.log(new_arr)
}
reverse_array()

//remove bad number
function remove_num(){
let arr = [2, 5, -6, 0, -1, 7, -9];
let n = arr.length;
let l= 0
for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
	arr[l] = arr[i];
	l++;
    }
}

for (let i = 0; i < l; i++) {
console.log(arr[i] + " ");
}}
remove_num()

//Question 3

function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
console.log(countVowels("Helloaween")); 

//Question 4


function isPalindrome(str) {
   
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("kayak"));   // true
console.log(isPalindrome("hello"));   // false

//Question 5
function check(){
    let numb=prompt("Enter two digit number")
    if(numb>50 && numb<99){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
check()
// 6. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.

function minMapped(arr, mapFunc) {
    const mappedValues = arr.map(mapFunc);
    return Math.min(...mappedValues);
}


function square(num) {
    return num * num;
}


let arr4 = [1, 2, 3, 4, 5];
console.log(minMapped(arr4, square)); 

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.


function fourCopies(str) {
    if (str.length >= 3) {
        const lastThree = str.slice(-3);
        return lastThree.repeat(4);
    } else {
        return "String length must be 3 and above.";
    }
}


let str5 = "JavaScript";
console.log(fourCopies(str5)); 

//Question 8

function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Angle should be between 0 and 180 degrees.";
    }
}
console.log(angleType(45));  
console.log(angleType(180));  
console.log(angleType(200));

//Question 9

function nearest_number(num) {
       while (num % 10) {
          num++;
    }
    
}

console.log(nearest_number(45)); 
console.log(nearest_number(592));




// 10. Write a JavaScript program to find the index of an array item in a for loop

function findIndex(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1; 
}


let arr6 = [10, 20, 30, 40, 50];
console.log(findIndex(arr6, 30));
console.log(findIndex(arr6, 100));