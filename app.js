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
    if (
      !Number.isInteger(fizz.value % buzz.value) ||
      fizz.value === '' ||
      buzz.value === ''
    ) {
      resultUl.appendChild(nanLi);
      document.body.appendChild(result);
    } else if (Number.isInteger(fizz.value % buzz.value)) {
      for (let i = 1; i <= 99; i++) {
        if (i % fizz.value === 0 && i % buzz.value === 0) {
          let resultLi = document.createElement('li');
          resultLi.textContent = `FizzBuzz ${i}`;
          resultUl.appendChild(resultLi);
        } else if (i % fizz.value === 0) {
          let resultLi = document.createElement('li');

          resultLi.textContent = `Fizz ${i}`;
          resultUl.appendChild(resultLi);
        } else if (i % buzz.value === 0) {
          let resultLi = document.createElement('li');

          resultLi.textContent = `Buzz ${i}`;
          resultUl.appendChild(resultLi);
        }
      }
      result.appendChild(resultUl);
    }

    document.body.appendChild(result);
  });
}
