let calculator = {
    read : (a, b) => {this.a = +prompt('a'); this.b = +prompt('b')},
    sum : () => console.log(`${this.a + this.b}`),
    mul : () =>console.log(`${this.a ** this.b}`),   
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );