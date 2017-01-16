'use strict';

(function () {
    var rentActCoText = document.getElementById('rentActCo').getElementsByClassName('rentActCoText')[0].getElementsByTagName('div')[0];
    var creditLvlText = document.getElementById('creditLvl').getElementsByClassName('creditLvlText')[0].getElementsByTagName('div')[0];
    var checkboxNumberConclusion = 0;
    var concurent = document.getElementById('concurent').getElementsByTagName('div')[0].getElementsByTagName('h2')[0];
    var concurentButton = document.getElementById('concurent').getElementsByClassName('btn btn-default')[0];

    checkBox();
    creditLvl();
    rentActCo();



    concurentButton.addEventListener('click', function(){

        var one = Number(rentActCoText.innerHTML.replace(/РА = /g, ''));
        var two = Number(creditLvlText.innerHTML.replace(/LCR = /g, ''));

        concurent.innerHTML = one + two + checkboxNumberConclusion;
        concurent.innerHTML = Math.round(concurent.innerHTML).toFixed(3);

    });

    function rentActCo() {
        var rentActCo = [].slice.call(document.getElementById('rentActCo').getElementsByTagName('input'));
        var button = document.getElementById('rentActCo').getElementsByClassName('btn btn-default')[0];

        var value = 0;

        button.addEventListener('click', function () {
            value = eval("((rentActCo[0].value / (rentActCo[2].value*rentActCo[1].value))*12)*0.333");
            rentActCoText.innerHTML = 'РА = ' + value;

        });


    }

    function creditLvl() {
        var creditLvl = [].slice.call(document.getElementById('creditLvl').getElementsByTagName('input'));
        var button = document.getElementById('creditLvl').getElementsByClassName('btn btn-default')[0];

        var value = 0;


        button.addEventListener('click', function () {
            console.log(creditLvl);

            value = eval("(creditLvl[0].value / creditLvl[1].value)*0.333");


            console.log(value);
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


