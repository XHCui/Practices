const bubbleSort_2 = function (arr) {
    let length = arr.length - 1;

    for (let i=0; i<length; i++) {
        for (let j=0; j<(length - i); j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

module.exports = bubbleSort_2;