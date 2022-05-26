let arr = [76, 1, 13, 2, 11, 5, 19, 34, 98, 56, 7];
for (let ii = 0; ii < arr.length; ii++) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let tempValue = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tempValue;
        }
    }
}

console.log(arr);