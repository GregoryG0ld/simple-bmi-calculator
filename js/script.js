document.addEventListener('DOMContentLoaded', function () {
   // Assuming lang_en and lang_lt are global variables
   let lang = lang_en; // Set the default language to English

   function updateContent() {
      // Example of updating content based on language
      document.querySelector('.display-5').textContent = lang.title;
      document.querySelector('.lead').textContent = lang.description;
      document.querySelector('label[for="height"]').textContent = lang.heightLabel;
      document.querySelector('label[for="weight"]').textContent = lang.weightLabel;
      document.querySelector('.check').textContent = lang.calculateBtn;
      document.querySelector('.clear').textContent = lang.clearBtn;
      document.querySelector('.text-message').textContent = lang.startCalculating;
   }

   // Initial content update
   updateContent();

   // Function to set language
   window.setLanguage = function (language) {
      lang = language === 'en' ? lang_en : language === 'lt' ? lang_lt : lang_en; // Default to English if language is not recognized
      updateContent();
   };





   const displayMessage = function (message) {
      document.querySelector('.text-message').textContent = message;
   };

   const showClearButton = function () {
      document.querySelector('.clear').style.display = 'block';
   };

   const eventHandler = function () {
      const heightInCentimeters = Number(
         document.querySelector('.height-input').value
      );
      const weightNum = Number(document.querySelector('.weight-input').value);

      if (!heightInCentimeters || !weightNum) {
         displayMessage(lang.enterBothValues);
      } else {
         const bmiIndex = weightNum / Math.pow(heightInCentimeters / 100, 2);
         console.log(bmiIndex);

         if (bmiIndex <= 18.5) {
            document.querySelector('body').style.backgroundColor = 'yellow';
            displayMessage(lang.underweightMessage + ' ' + bmiIndex.toFixed(2));
         } else if (bmiIndex >= 18.5 && bmiIndex <= 24.9) {
            document.querySelector('body').style.backgroundColor = 'green';
            displayMessage(
               lang.normalMessage + ' ' + bmiIndex.toFixed(2)
            );
         } else if (bmiIndex >= 25 && bmiIndex <= 29.9) {
            document.querySelector('body').style.backgroundColor = 'orange';
            displayMessage(lang.overweightMessage + ' ' + bmiIndex.toFixed(2));
         } else {
            document.querySelector('body').style.backgroundColor = 'red';
            displayMessage(
               lang.aboveNormalMessage + ' ' + bmiIndex.toFixed(2)
            );
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

});