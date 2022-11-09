function upper(x){
    var y = x.split(" ")
    console.log(y)
    for (let i = 0; i < y.length; i++){
        y[i] = y[i].charAt(0).toUpperCase() + y[i].slice(1);
    }
    let a = y.join(" ");
    return a
}
console.log(upper("hello world my name is hor"))