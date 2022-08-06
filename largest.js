function largestNum(x,y,z){
    if(x>y && x>z){
        return x;
    }

    else if(y>x && y>z){
        return y;
    }
    
    else{
        return z;
    }
}

console.log(largestNum(23,53,23));
console.log(largestNum(355,222,32));
console.log(largestNum(4,34,333));
