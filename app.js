/** @format */

'use strict';

{
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const btn = document.getElementById('btn');
  const resultUl = document.getElementById('resultUl');
  const result = document.getElementById('result');
  const nanLi = document.createElement('li');
  nanLi.textContent = '整数値を入力してください';

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    while (resultUl.firstChild) {
      resultUl.removeChild(resultUl.firstChild);
    }
    let integer = Number.isInteger(fizz.value % buzz.value);
    let fizzEmpty = fizz.value === '';
    let buzzEmpty = buzz.value === '';
    if (!integer || fizzEmpty || buzzEmpty) {
      resultUl.appendChild(nanLi);
      document.body.appendChild(result);
    } else {
      for (let i = 1; i <= 99; i++) {
        if (i % Number(fizz.value) === 0 && i % Number(buzz.value) === 0) {
          const resultLi = document.createElement('li');
          resultLi.textContent = `FizzBuzz ${i}`;
          resultUl.appendChild(resultLi);
        } else if (i % Number(fizz.value) === 0) {
          const resultLi = document.createElement('li');

          resultLi.textContent = `Fizz ${i}`;
          resultUl.appendChild(resultLi);
        } else if (i % Number(buzz.value) === 0) {
          const resultLi = document.createElement('li');

          resultLi.textContent = `Buzz ${i}`;
          resultUl.appendChild(resultLi);
        }
      }
      result.appendChild(resultUl);
    }

    document.body.appendChild(result);
  });
}
