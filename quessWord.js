function remember() {
    let arrSecondGame = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrSecondGame = arrSecondGame.sort(() => Math.random() - 0.5);
    alert(arrSecondGame);
  
    let firstAnswer = prompt('Какое слово было первым?').toLowerCase();
    let secondAnswer = prompt('Какое слово было последним?').toLowerCase();
  
    if (arrSecondGame[0].toLowerCase() === firstAnswer && arrSecondGame[arrSecondGame.length - 1].toLowerCase() === secondAnswer) {
    return "Поздравляю! Всё правильно!";
    } else if (arrSecondGame[0].toLowerCase() === firstAnswer || arrSecondGame[arrSecondGame.length - 1].toLowerCase() === secondAnswer) {
    return "Вы были близки к победе";
    } else {return "Вы проиграли";
    }
  
  }

  
   