let phone = document.querySelector('#phone');
// event — содержит информацию о событии
// event.type - тип события
// event.key - нажатый на клавиатуре символ
// event.preventDefault - отмена действия по умолчанию
phone.addEventListener('keydown', (event) => {
    //console.log(event.key);

    let isDigit = false;
    let isDash = false;
    let isControl = false;

    if (event.key >= 0 && event.key <= 9 && event.key != ' ') {
        isDigit = true;
    }
    if (event.key == "-") {
        isDash = true;
    }

    if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
        isControl = true;
    }
    /*
    if (isDigit == true) {
        console.log('цифра', event);
    } else {
        console.log('другой символ');
    }
    */

    if (!isDigit && !isControl && !isDash) { //checking for true the value, not the opposite
        event.preventDefault();
    }


    /*console.log(event.preventDefault);*/
})





