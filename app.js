
var pressButton = function(action){
    var inA = document.getElementById("inputA").value;
    var inB = document.getElementById("inputB").value;
    var inC = document.getElementById("inputC").value;
    let actions = {
        "add": add(Number(inA), Number(inB)),
        "multiply": multiply(Number(inA), Number(inB)),
        "subtract": subtract(Number(inA), Number(inB)),
        "diskriminant": diskriminant(Number(inA), Number(inB), Number(inC)),
        "minVal": minVal(Number(inA), Number(inB), Number(inC)),
        "midVal": midVal(Number(inA), Number(inB), Number(inC)),
        "maxVal": maxVal(Number(inA), Number(inB), Number(inC)),
        "showString": showString(inA, inB, inC),
        "reverse": reverseString(inA, inB, inC),
        "løs2grads": løs2grads(Number(inA), Number(inB), Number(inC)),
        "sortByLength": sortByLength(inA, inB, inC),
        "sortByAlphabet": sortByAlphabet(inA, inB, inC),
        "kampPoint": kampPoint(inA),
        "seriePoint": seriePoint(inA),
        "vinder": vinder(inA, inB, inC),
    };
    result = actions[action];
    document.getElementById("result").innerHTML = result;
}

var add = function(a, b){
    return a + b;
}
var subtract = function(a, b){
    return a-b;
}
var multiply = function(a, b){
    return a * b;
}
// skriv inhold til funk
var diskriminant = function(a, b, c){
    return 0    ;
}
var løs2grads = function(a, b, c){
    return "0 og 1" // eller "3" eller "Der findes ingen løsninger";
}
var minVal = function(a, b, c){

    if(a<b && a<c) {return a }
    
    if (b<c && b<a){return b}

    else {return c}



    
}
var maxVal =  function(a, b, c){
    
    if(a>b && a>c) {return a}
    if(b>a && b>c){return b}
   else {return c}

}
var midVal =  function(a, b, c){
    if(a<b && a>c) {return a }
    if(a<c && a>b) {return a }


    if (b<c && b>a){return b}
    if (b<a && b>c){return b}

    else {return c}
}
var showString = function(a, b, c){
    return "Jeg er skøn";
}
var reverseString = function(a, b, c){
    return "skøn jeg er";
}
var sortByLength = function(a, b, c){
    return "er jeg lang";
}
var sortByAlphabet = function(a, b, c){
    return "er jeg lang";
}
var navneLængde = function(a, b, c){
    return 10;
}
var kampPoint = function(a){

    if (a=="V"){return 3};
    if (a=="U"){return 1};
    if (a=="T"){return 0};
    
}
var seriePoint = function(a, b, c){
    return 0;
}
var vinder =  function(a, b, c){
    return "a";
}
