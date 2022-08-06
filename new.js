function smallNum(x,y,z){
    if(x<z && x<y){
        return x;
    }
    else if(y<x && y<z){
        return y;
    }
    else{
        return z;
    }
}

console.log(smallNum(32,3,550));
console.log(smallNum(23,444,333));
console.log(smallNum(33,34,2));