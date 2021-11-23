var testButton =  function(action){
    if(action == "add"){
        result = testadd();
    }else if(action == "diskriminant"){
        result = testdiskriminant();
    }else if(action == "minVal"){
        result = testminVal();
    }else if(action == "midVal"){
        result = testmidVal();
    }else if(action == "maxVal"){
        result = testmaxVal();
    }else if(action == "showString"){
        result = testshowString();
    }else if(action == "reverseString"){
        result = testreverseString();
    }
    $("#result").html(result);
}
var runTests = function(func, data){
    displayString = "";
    for(var i= 0; i  < data.length; i++){
        var yourResult = func(data[i].a, data[i].b, data[i].c);
        var expectedResult = data[i].expected;
        if(expectedResult === yourResult){
            displayString += "<span style='color: #00ff00'>Test " + (i+1) + 
            " passed</span><br>";
        } else {
            displayString += "<span style='color: #ff0000'>Test " + (i+1) + 
            " failed. Got "+ yourResult +" when "+ JSON.stringify(data[i]) +".</span><br>";
        }
    }
    return displayString;
}
var testadd = function(){
    data = [{
        a: 1,
        b: 2,
        expected: 3
    },{
        a: -1,
        b: -8,
        expected: -9
    },{
        a: 12435262,
        b:-33469443,
        expected: -21034181
    }];
    return runTests(add,data);
    
}

var testdiskriminant = function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: -8
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: 72
    },{
        a: 123,
        b: 987,
        c: 567,
        expected: 695205
    }];
    return runTests(diskriminant, data);
}
var testløs2grads = function(a, b, c){
    return;
}
var testminVal = function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: 1
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: -8
    },{
        a: 123,
        b: -987,
        c: 567,
        expected: -987
    },{
        a: 122,
        b: 122,
        c: 567,
        expected: 122
    },{
        a: 122,
        b: 122,
        c: 122,
        expected: 122
    }];
    return runTests(minVal, data);
}
var testmaxVal =  function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: 3
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: 2
    },{
        a: 123,
        b: -987,
        c: 567,
        expected: 567
    },{
        a: 122,
        b: 122,
        c: 567,
        expected: 567
    },{
        a: 122,
        b: 122,
        c: 122,
        expected: 122
    }];
    return runTests(maxVal, data);
}
var testmidVal =  function(a, b, c){
    data = [{
        a: 1,
        b: 2,
        c: 3,
        expected: 2
    },{
        a: -1,
        b: -8,
        c: 2,
        expected: -1
    },{
        a: 123,
        b: -987,
        c: 567,
        expected: 123
    },{
        a: 122,
        b: 122,
        c: 567,
        expected: 122
    },{
        a: 122,
        b: 122,
        c: 122,
        expected: 122
    }];
    return runTests(midVal, data);
}
var testshowString = function(a, b, c){

    data = [{
        a: "hej",
        b: "med",
        c: "dig",
        expected: "hej med dig"
    },{
        a: "Lev",
        b: "vel",
        c: "Frank",
        expected: "Lev vel Frank"
    },{
        a: "1",
        b: "2",
        c: "3",
        expected:"1 2 3"
    },{
        a: "Sådan",
        b: "går",
        c: "det.",
        expected: "Sådan går det."
    }];
    return runTests(showString, data);
}
var testreverseString = function(a, b, c){
    data = [{
        a: "hej",
        b: "med",
        c: "dig",
        expected: "dig med hej"
    },{
        a: "Lev",
        b: "vel",
        c: "Frank",
        expected: "Frank vel Lev"
    },{
        a: "1",
        b: "2",
        c: "3",
        expected:"3 2 1"
    },{
        a: "Virum",
        b: "Gymnasium",
        c: "Styrer",
        expected: "Styrer Virum Gymnasium"
    }];
    return runTests(reverseString, data);
}