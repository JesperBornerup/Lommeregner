var testButton =  function(action){
    if(action == "add"){
        result = testadd();
    }else if(action == "diskriminant"){
        result = testdiskriminant();
    }else if(action == "minVal"){
        result = testminVal();
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
    return;
}
var testmidVal =  function(a, b, c){
    return;
}
var testshowString = function(a, b, c){
    return;
}
var testreverseString = function(a, b, c){
    return;
}