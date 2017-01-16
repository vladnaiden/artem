'use strict';

var params = JSON.parse(localStorage.getItem("params"));


var valueSlou = document.getElementById('valueSlou').innerHTML = params[0].valueSlou.toFixed(3);
var rentambleWord = document.getElementById('rentambleWord').innerHTML = params[1].rentambleWord;
var concNumber = document.getElementById('concNumber').innerHTML = params[2].concNumber.toFixed(3);

var blocksPanel = [].slice.call(document.getElementById('blocks').getElementsByClassName('panel'));


var totalGrandNum = ((params[0].valueSlou * 0.01) * params[1].rentambleNumber * params[2].concNumber).toFixed(3);

blocksPanel.forEach(block=> {
    block.style.borderColor = "gray";
    block.getElementsByClassName('panel-heading')[0].style.borderColor = "gray";
    block.getElementsByClassName('panel-heading')[0].style.color = "black";
    block.getElementsByClassName('panel-heading')[0].style.backgroundColor = "gray";

});

document.getElementById('lifeLvl').innerHTML = totalGrandNum;

if (totalGrandNum < 0.24) {
    blocksPanel[0].removeAttribute("style");
    blocksPanel[0].getElementsByClassName('panel-heading')[0].removeAttribute("style");
}
else if (0.25 < totalGrandNum && totalGrandNum < 0.5) {
    blocksPanel[1].removeAttribute("style");
    blocksPanel[1].getElementsByClassName('panel-heading')[0].removeAttribute("style");
}
else if (0.5 < totalGrandNum && totalGrandNum < 0.75) {
    blocksPanel[2].removeAttribute("style");
    blocksPanel[2].getElementsByClassName('panel-heading')[0].removeAttribute("style");
}
else if (totalGrandNum > 0.75) {
    blocksPanel[3].removeAttribute("style");
    blocksPanel[3].getElementsByClassName('panel-heading')[0].removeAttribute("style");
}


