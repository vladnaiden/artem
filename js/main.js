'use strict';

function checkBox() {
    var checkbox = [].slice.call(document.getElementById('checkbox').getElementsByTagName('input'));
    var btnPrimary = document.getElementById('checkbox').getElementsByClassName('btn btn-primary')[0];
    var button = document.getElementById('checkbox').getElementsByClassName('btn btn-info')[0];
    var value = 0,
        checkboxNumberConclusion = 0;


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

checkBox();
creditLvl();

function creditLvl() {
    var creditLvl = [].slice.call(document.getElementById('creditLvl').getElementsByTagName('input'));
    var button = document.getElementById('creditLvl').getElementsByClassName('btn btn-default')[0];
    var creditLvlText = document.getElementById('creditLvl').getElementsByClassName('creditLvlText')[0];
    var value = 0;


    button.addEventListener('click', function () {

        creditLvl.forEach(val=> {
            value = ((val[0].value/val[1].value)*100)*0.333;
        });

        creditLvlText.innerHTML = 'LCR = ' + 11;

    });


}

