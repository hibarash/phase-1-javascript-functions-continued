// code your solution here
saturdayFun();
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('bathe my dog');


const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork();

//const highlightFunction = wrapAdjective(result = "*")
function wrapAdjective(result = "") {
    const innerFunction = function (adjective = "a hard worker") {
        return `You are ${result}${adjective}${result}!`;
}
return innerFunction
}

//wrapAdjective();
//wrapAdjective("||");
innerFunction();

     