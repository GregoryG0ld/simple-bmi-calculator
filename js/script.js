console.log("Hello");

// How to determine which number is in input field?

const displayMessage = function (message) {
   document.querySelector('.text-message').textContent = message;
};

const eventHandler = function () {
   const heightNum = Number(document.querySelector('.height-input').value);

   const weightNum = Number(document.querySelector('.weight-input').value);

   if (!heightNum || !weightNum) {
      displayMessage('Enter both your Height and your Weight!');
   } else {

      const bmiIndex = weightNum / Math.pow(heightNum, 2);
      console.log(bmiIndex);

      if (bmiIndex <= 25) {
         document.querySelector('body').style.backgroundColor = 'green';
         displayMessage('Congratulations your BMI is Good' + ' ' + bmiIndex);
      } else {
         document.querySelector('body').style.backgroundColor = 'red';
         displayMessage('Sorry but your BMI is above normal' + ' ' + bmiIndex);
      }
   }
};

document.querySelector('.check').addEventListener('click', eventHandler);

document.querySelector('.clear').addEventListener('click', function () {
   document.querySelector('.height-input').value = '0.00';
   document.querySelector('.weight-input').value = '0';
   document.querySelector('body').style.backgroundColor = 'white';
   displayMessage('Start Calculating!');

});

// const heightNum = Number(document.querySelector('.height-input').value)

//console.log(heightNum);   