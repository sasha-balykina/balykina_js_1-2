var listName = [];
for (var i = 0; i < 5; i++) {
    var name = prompt('Создание списка пользователей. Введите имя: ' + (i+1), '');
    console.log ('Введенное имя -', name);
    listName.push(name);
}

var enteredName = prompt('ВХОД В СИСТЕМУ. Введите имя пользователя:', '');
var correctName;
for (var i = 0; i < listName.length; i++) {
    if (enteredName == listName[i]) {
        correctName = enteredName;
    }
}

if (correctName) {
    alert(correctName + ', вы успешно вошли!');
    console.log ('Вы успешно вошли! Привет', correctName);
} else {
    alert('Ошибка! Неправильное имя пользователя!');
    console.log ('Мы тебя не знаем,', enteredName);
}