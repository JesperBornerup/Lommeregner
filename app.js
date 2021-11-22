
var pressButton = function(action){
    var a = $("#inputA").val();
    var b = $("#inputB").val();
    var c = $("#inputC").val();
    if(action === "add"){
        result = add(Number(a), Number(b));
    } else if (action === "multiply"){
        result = multiply(Number(a), Number(b));
    } else if (action === "subtract"){
        result = subtract(Number(a), Number(b));
    } else if (action === "diskriminant"){
        result = diskriminant(Number(a), Number(b), Number(c));
    } else if (action === "minVal"){
        result = minVal(Number(a), Number(b), Number(c));
    }else {
        result = "No action corresponding to " + action;
    }
    $('#result').html(result);
}
var add = function(a, b){
    return a + b;
}
var subtract = function(a, b){
    return a - b;
}
var multiply = function(a, b){
    return a * b;
}

// skriv funktionerne
var diskriminant = function(a, b, c){
    return 0;
}
var løs2grads = function(a, b, c){
    return "0 og 1";
}
var minVal = function(a, b, c){

    return 0;
}
var maxVal =  function(a, b, c){
    return 0;
}
var midVal =  function(a, b, c){
    return 0;
}
var showString = function(a, b, c){
    return "1 2 3";
}
var reverseString = function(a, b, c){
    return "dig med hej";
}


       
        
