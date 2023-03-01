function pow(x, n) {
    let mathPow = x;
  
    for (let i = 1; i < n; i++) {
        mathPow *= x;
    }
  
    return mathPow;
  }

let n = 5;
let x = 2;

  
  if (n < 1) {
    alert('степень больше либо равна 1');
  } else {
    alert( pow(x, n) );
  }