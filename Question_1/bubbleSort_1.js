const bubbleSort_1 = function (arr) {
    let swapp;
    let n = arr.length - 1;
    let x = arr;

    do {
        swapp = false;
        for (let i=0; i<n; i++) {
            if (x[i] > x[i+1]) {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);

    return x;
}

module.exports = bubbleSort_1;

