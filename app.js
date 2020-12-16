/** @format */

'use strict';

{
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const btn = document.getElementById('btn');
  const ul = document.querySelector('.result ul');
  const result = document.querySelector('.result');
  let nanLi = document.createElement('li');
  nanLi.textContent = '整数値を入力してください';

  function resetVal() {
    fizz.value = '';
    buzz.value = '';
  }

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    nanLi.remove();

    if (
      !Number.isInteger(fizz.value % buzz.value) ||
      fizz.value === '' ||
      buzz.value === ''
    ) {
      ul.remove();

      resetVal();
      result.appendChild(nanLi);
      document.body.appendChild(result);
    } else if (Number.isInteger(fizz.value % buzz.value)) {
      nanLi.remove();

      for (let i = 1; i <= 99; i++) {
        if (i % fizz.value === 0 && i % buzz.value === 0) {
          let resultLi = document.createElement('li');
          resultLi.textContent = `FizzBuzz ${i}`;
          ul.appendChild(resultLi);
        } else if (i % fizz.value === 0) {
          let resultLi = document.createElement('li');

          resultLi.textContent = `Fizz ${i}`;
          ul.appendChild(resultLi);
        } else if (i % buzz.value === 0) {
          let resultLi = document.createElement('li');

          resultLi.textContent = `Buzz ${i}`;
          ul.appendChild(resultLi);
        }
      }
      result.appendChild(ul);
    }

    document.body.appendChild(result);
    resetVal();
  });
}
