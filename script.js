function checkNumber(num, num2, num3) {
    if((num>=50 && num<= 99) || (num2>=50 && num2<=99) || (num3>=50 && num3<=99)){
        return true;
    }

    else{
        return false;
    }
}

console.log(checkNumber(554,500,500));

console.log(checkNumber(500,300,959));