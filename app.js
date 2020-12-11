/** @format */

'use strict';

{
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const btn = document.getElementById('btn');
  const ul = document.createElement('ul');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    for (let i = 1; i <= 99; i++) {
      let li = document.createElement('li');
      if (i % fizz.value === 0 && i % buzz.value === 0) {
        li.textContent = `FizzBuzz ${i}`;
        ul.appendChild(li);
      } else if (i % fizz.value === 0) {
        li.textContent = `Fizz ${i}`;
        ul.appendChild(li);
      } else if (i % buzz.value === 0) {
        li.textContent = `Buzz ${i}`;
        ul.appendChild(li);
      }
    }
    document.body.appendChild(ul);
    if (
      fizz.value % 1 !== 0 ||
      buzz.value % 1 !== 0 ||
      fizz.value === '' ||
      buzz.value === ''
    ) {
      let nanLi = document.createElement('li');
      let li = document.body.lastChild;
      nanLi.textContent = '整数値を入力してください';
      document.body.removeChild(li);
      document.body.appendChild(nanLi);
    }
  });
}
