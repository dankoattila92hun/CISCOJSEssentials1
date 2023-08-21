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


/*let firstName = "Maxwell Wright";
let secondName = "Raja Villarreal";
let thirdName = "Helen Richards";
let firstPhone = "(0191) 719 6495";
let secondPhone = "0866 398 2895";
let thirdPhone = "0800 1111";
let firstEmail = "Curabitur.egestas.nunc@nonummyac.co.uk";
let secondEmail = "	posuere.vulputate@sed.com";
let thirdEmail = "	libero@convallis.edu";*/

function personalDatas(firstName, firstPhone, firstEmail) {
    let datas = firstName + " " + firstPhone + " " + firstEmail;
    console.log(datas);
    /*datas = thirdName + " " + thirdPhone + " " + thirdEmail;
    console.log(datas);*/
}

personalDatas("Maxwell Wright", "(0191) 719 6495", "Curabitur.egestas.nunc@nonummyac.co.uk");