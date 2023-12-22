console.log("Hello");

// How to determine which number is in input field?

const displayMessage = function (message) {
   document.querySelector('.text-message').textContent = message;
};

const showClearButton = function () {
	document.querySelector('.clear').style.display = 'block';
};

const eventHandler = function () {
   const heightNum = Number(document.querySelector('.height-input').value);

   const weightNum = Number(document.querySelector('.weight-input').value);

   if (!heightNum || !weightNum) {
      displayMessage('Enter both your Height and your Weight!');
   } else {

      const bmiIndex = weightNum / Math.pow(heightNum, 2);
      console.log(bmiIndex);

      if (bmiIndex <= 18.5) {
         document.querySelector('body').style.backgroundColor = 'yellow';
         displayMessage('Your BMI is underweight ' + ' ' + bmiIndex.toFixed(2));
      } else if (bmiIndex >= 18.5 && bmiIndex <= 24.9) {
         document.querySelector('body').style.backgroundColor = 'green';
         displayMessage('Congratulations your BMI is normal' + ' ' + bmiIndex.toFixed(2));
      } else if (bmiIndex >= 25 && bmiIndex <= 29.9) {
         document.querySelector('body').style.backgroundColor = 'orange';
         displayMessage('Your BMI is overweight ' + ' ' + bmiIndex.toFixed(2));
      } else {
         document.querySelector('body').style.backgroundColor = 'red';
         displayMessage('Sorry but your BMI is above normal' + ' ' + bmiIndex.toFixed(2));
      }
      		showClearButton();
   }
};

document.querySelector('.check').addEventListener('click', eventHandler);

document.querySelector('.clear').addEventListener('click', function () {
   document.querySelector('.height-input').value = '0.00';
   document.querySelector('.weight-input').value = '0';
   document.querySelector('body').style.backgroundColor = 'white';
   displayMessage('Start Calculating!');
   	document.querySelector('.clear').style.display = 'none';

});

// const heightNum = Number(document.querySelector('.height-input').value)

//console.log(heightNum);   
