// Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.


// findMax([1, 5, 3, 9, 2]); // Expected output: 9
// findMax([-10, -5, -3, -9, -2]); // Expected output: -2
// findMax([10, 10, 10, 10]); // Expected output: 10



const findMax=(data)=>{
    let max = data[0]; 
    for (let i = 1; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}

findMax([1, 5, 3, 9, 2])