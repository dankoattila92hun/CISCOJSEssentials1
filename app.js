let roseUnitePrice = 8;
let roseQuantity = 70;

let lilyUnitePrice = 10;
let lilyQuantity = 50;

let tulipUnitePrice = 2;
let tulipQuantity = 120;

function flowerMultiple () {
    let roseMultiple = roseUnitePrice * roseQuantity;
    let lilyMultiple = lilyUnitePrice * lilyQuantity;
    let tulipMultiple = tulipUnitePrice * tulipQuantity;

    let totalSum = roseMultiple + lilyMultiple + tulipMultiple;

    console.log(roseMultiple);
    console.log(lilyMultiple);
    console.log(tulipMultiple);
    console.log(totalSum);
}

flowerMultiple();