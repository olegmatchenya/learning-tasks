function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
console.log(checkAge(19));
  
  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }    console.log(checkAge(9));

  