var numb = prompt('Введите число', '');
console.log ('Число:', numb);
var exponent = prompt('Введите степень', '');
console.log ('Степень:', exponent);

if (exponent == 0) {
    alert('Результат: 1');
    console.log('Результат: 1');
}

if (numb == 0) {
    alert('Результат: 0');
    console.log('Результат: 0');
}

if (numb > 0  && exponent > 0) {
    console.log('Результат:', pow(numb, exponent));
    alert('Результат: ' + pow(numb, exponent));
}

if (numb > 0 && exponent < 0){
    var res = pow(numb, exponent);
    console.log( 'Результат:', 1/res );
    alert('Результат: ' + 1/res );
}

if (numb < 0 && exponent > 0) {
    if (isEven(numb) == true) {
        console.log( 'Результат:', pow(numb, exponent) );
        alert('Результат: ' + pow(numb, exponent) );
    } else {
        console.log( 'Результат:', (-1) * pow(numb, exponent) );
        alert('Результат: ' + (-1) * pow(numb, exponent) );
    }
}

if (numb < 0 && exponent < 0) {
    if (isEven(numb) == true) {
        console.log( 'Результат:', 1/pow(numb, exponent) );
        alert('Результат: ' + 1/pow(numb, exponent) );
    } else {
        console.log( 'Результат:', (-1) * (1/pow(numb, exponent)) );
        alert('Результат: ' + (-1) * (1/pow(numb, exponent)) );
    }
}

function pow(x, y) {
    var res = 1;
    for (var i = 1; i <= Math.abs(y); i++) {
        res *= x;
    }
    return res;
}

function isEven(someNumber) {
    return (someNumber % 2 == 0) ? true : false;
}