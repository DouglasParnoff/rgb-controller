const jColors =  {"Red" : "", "Green":"", "Blue":""};

function setColorValue(color, value){
    jColors[color] = value;
}

function getInputRangeByColor(color){
    return document.getElementById("range"+color);
}

function getInputTextByColor(color){
    return document.getElementById("range"+color+"Value");
}

function updateRangeValueWhenMoveRange(color){
    let inputRange = getInputRangeByColor(color);
    let inputText = getInputTextByColor(color);
    setColorValue(color, inputRange.value);
    inputText.value = inputRange.value;
    inputRange.addEventListener("mousemove", function(){
        inputText.value = inputRange.value;
        setColorValue(color, inputRange.value);
    });
}

function paintSquare(){
    let coloredSquare = document.getElementById("coloredSquare");    
    coloredSquare.style.backgroundColor = 'rgb(' + jColors.Red + ',' + jColors.Green + ',' + jColors.Blue + ')';;    
}

function paintSquareWhenRangeChange(color){
    let inputRange = getInputRangeByColor(color);
    inputRange.addEventListener("change", function(){
        paintSquare();
    });    
}

window.addEventListener("load", function(event) {
    for(let color in jColors){
        updateRangeValueWhenMoveRange(color);
        paintSquareWhenRangeChange(color);
    }
    paintSquare();
});


/*
document.addEventListener("DOMContentLoaded", function(event) {
    for(let color in jColors){
        updateRangeValueWhenMoveRange(color);
        paintSquareWhenRangeChange(color);
    }
    paintSquare();
});
*/