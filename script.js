function add7(x){
    return x+7;
}

function multiply(x, y){
    return x*y;
}

function capitalize(word){
    return word[0].toUpperCase();
}
console.log(capitalize("computer"));

function lastLetter(x){
    let len = x.length;
    return x[len-1].toUpperCase();
}
console.log(lastLetter("computer"));