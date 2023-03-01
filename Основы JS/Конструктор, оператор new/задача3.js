function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function() {
        this.value += +prompt('добавить к value');
      };
    }
    let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);