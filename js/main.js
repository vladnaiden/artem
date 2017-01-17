'use strict';
var valueSlou = 0;
var countRentablTextNumber = 0;
var countRentablTextWord = '';

var concNumber = 0;
(function () {
    var rentActCoText = document.getElementById('rentActCo').getElementsByClassName('rentActCoText')[0].getElementsByTagName('div')[0];
    var creditLvlText = document.getElementById('creditLvl').getElementsByClassName('creditLvlText')[0].getElementsByTagName('div')[0];
    var checkboxNumberConclusion = 0;
    var concurent = document.getElementById('concurent').getElementsByTagName('div')[0].getElementsByTagName('h2')[0];
    var concurentButton = document.getElementById('concurent').getElementsByClassName('btn btn-default')[0];

    checkBox();
    creditLvl();
    rentActCo();


    concurentButton.addEventListener('click', function () {

        var one = Number(rentActCoText.innerHTML.replace(/РА = /g, ''));
        var two = Number(creditLvlText.innerHTML.replace(/LCR = /g, ''));

        concNumber = one + two + checkboxNumberConclusion;
        concurent.innerHTML = concNumber.toFixed(3);

    });

    function rentActCo() {
        var rentActCo = [].slice.call(document.getElementById('rentActCo').getElementsByTagName('input'));
        var button = document.getElementById('rentActCo').getElementsByClassName('btn btn-default')[0];

        var value = 0;

        button.addEventListener('click', function () {
            value = (((parseFloat(rentActCo[0].value)) / ((parseFloat(rentActCo[2].value)) * (parseFloat(rentActCo[1].value))) * 12) * 0.333);
            rentActCoText.innerHTML = 'РА = ' + value;

        });


    }

    function creditLvl() {
        var creditLvl = [].slice.call(document.getElementById('creditLvl').getElementsByTagName('input'));
        var button = document.getElementById('creditLvl').getElementsByClassName('btn btn-default')[0];

        var value = 0;


        button.addEventListener('click', function () {

            value = (parseFloat(creditLvl[0].value) / (parseFloat(creditLvl[1].value)) * 0.333);

            creditLvlText.innerHTML = 'LCR = ' + value;

        });


    }

    function checkBox() {
        var checkbox = [].slice.call(document.getElementById('checkbox').getElementsByTagName('input'));
        var btnPrimary = document.getElementById('checkbox').getElementsByClassName('btn btn-primary')[0];
        var button = document.getElementById('checkbox').getElementsByClassName('btn btn-info')[0];
        var value = 0;


        checkbox.forEach(val => {
            val.addEventListener('click', function () {
                value = value + Number(this.value);
            });
        });


        btnPrimary.addEventListener('click', function () {
            if (value <= 4) {
                button.innerHTML = '~Низька';
                checkboxNumberConclusion = 0.11111;
            } else if (value > 4 && 8 > value) {
                button.innerHTML = '~Середня';
                checkboxNumberConclusion = 0.22222;
            } else {
                button.innerHTML = '~Висока';
                checkboxNumberConclusion = 0.33333;
            }

        });

    }

}());

(function () {
    var countRentablText = document.getElementsByClassName('countRentablText')[0].getElementsByTagName('div')[0].getElementsByTagName('h2')[0];
    var countRentabl = [].slice.call(document.getElementById('countRentabl').getElementsByTagName('input'));
    var btnPrimary = document.getElementById('countRentabl').getElementsByClassName('btn btn-primary')[0];
    var pa;
    var pk;


    btnPrimary.addEventListener('click', function () {
        pa = eval("(parseFloat(countRentabl[0].value)/(parseFloat(countRentabl[1].value)*parseFloat(countRentabl[2].value)))*12").toFixed(3);
        pk = eval("(parseFloat(countRentabl[0].value)/parseFloat((countRentabl[3].value)*parseFloat(countRentabl[2].value)))*12").toFixed(3);

        if (pa > 0.02 && pk > 0.1) {
            countRentablText.innerHTML = "Висока";
            countRentablTextNumber = 1;
            countRentablTextWord = "Висока";
        } else if ((pa > 0.01 && pa < 0.02) && pk > 0.07) {
            countRentablText.innerHTML = "Достатня";
            countRentablTextNumber = 0.75;
            countRentablTextWord = "Достатня";
        }
        else if ((pa > 0 && pa < 0.01) && pk > 0) {
            countRentablText.innerHTML = "Низька";
            countRentablTextNumber = 0.5;
            countRentablTextWord = "Низька";
        }
        else if (pa < 0 && pk < 0) {
            countRentablText.innerHTML = "Неприбутково";
            countRentablTextNumber = 0.25;
            countRentablTextWord = "Неприбутково";
        } else {
            countRentablText.innerHTML = "Помилкові дані"
        }


    });


}());

(function () {
    var slouModlText = document.getElementsByClassName('slouModlText')[0].getElementsByTagName('div')[0].getElementsByTagName('h2')[0];
    var slouModl = [].slice.call(document.getElementById('slouModl').getElementsByTagName('input'));
    var btnPrimary = document.getElementById('slouModl').getElementsByClassName('btn btn-primary')[0];

    btnPrimary.addEventListener('click', function () {
        valueSlou = ((parseFloat(slouModl[0].value) + parseFloat(slouModl[1].value)) * parseFloat(slouModl[2].value)) - parseFloat(slouModl[3].value) * parseFloat(slouModl[6].value) - parseFloat(slouModl[4].value) * parseFloat(slouModl[5].value);
        slouModlText.innerHTML = valueSlou;
    })


}());

document.getElementById('saveData').addEventListener('click', function () {
    var params = [];
    var slou = {valueSlou: valueSlou};
    var rentamble = {rentambleNumber: countRentablTextNumber, rentambleWord: countRentablTextWord};
    var concNum = {concNumber: concNumber};

    params.push(slou);
    params.push(rentamble);
    params.push(concNum);

    localStorage.setItem('params', JSON.stringify(params));

});

