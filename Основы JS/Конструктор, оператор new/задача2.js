function user() {
 
    this.Read = function () {
      this.firstNumber = +prompt('Enter first number', 0);
      this.secondNumber =  +prompt('Enter second number', 0);
    }
    this.Calc =  function () {
      alert(this.firstNumber + this.secondNumber);
    }
  
    this.Mult =  function () {
      alert(this.firstNumber * this.secondNumber)
    } 
  }
  
  let f = new user();
  f.Read();
  f.Calc();
  f.Mult();