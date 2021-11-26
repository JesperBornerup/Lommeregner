
var pressButton = function(action){
    var a = $("#inputA").val();
    var b = $("#inputB").val();
    var c = $("#inputC").val();
    console.log(action);
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
    }else if (action === "midVal"){
        result = midVal(Number(a), Number(b), Number(c));
    }else if (action === "maxVal"){
        result = maxVal(Number(a), Number(b), Number(c));
    }else if (action === "showString"){
        result = showString(a, b, c);
    }else if (action === "reverseString"){
        result = reverseString(a, b, c);
    }else if (action === "løs2grads"){
        result = løs2grads(Number(a), Number(b), Number(c));
    }else if (action === "sortByLength"){
        result = sortByLength(a, b, c);
    }else if (action === "sortByAlphabet"){
        result = sortByAlphabet(a, b, c);
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

// skriv inhold til funk
var diskriminant = function(a, b, c){
    return 0    ;
}
var løs2grads = function(a, b, c){
    return "0 og 1" // eller "3" eller "Der findes ingen løsninger";
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


       
        
