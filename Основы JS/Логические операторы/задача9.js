let login = prompt('введите логин', '')


if (login === 'Админ') {
  let password = prompt('Введите пароль');
   if (password === 'Я главный'){
    alert('Здравствуйте!')
   }else if (password === '' || password === null){
    alert('Отменено')
   } else {
    alert('Неверный пароль')
   }
} else if (login === '' || login === null) {
    alert('Отменено')
} else {
    alert ('я вас не знаю')
}