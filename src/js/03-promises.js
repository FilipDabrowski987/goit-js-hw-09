const form = document.querySelector('.form');
const startButton = form.querySelector('button[promise-start]');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  startButton.setAttribute('disabled', true);
  const amount = Number(event.target.elements[2].value);
  const step = Number(event.target.elements[1].value);
  const delay = Number(event.target.elements[0].value);

  let completedPromises = 0;

for (let i = 0; i < amount; i++) {
  createPromise(i, delay + i * step)
  .then(({position, delay}) => {
    console.log(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
     completedPromises++;
        if (completedPromises === amount) {
          startButton.removeAttribute('disabled');
        }
  })
  .catch(({position, delay}) => {
    console.log(`❌ Rejected promise ${position + 1} in ${delay}ms`);
     completedPromises++;
        if (completedPromises === amount) {
          startButton.removeAttribute('disabled');
        }
  });
  };
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
};