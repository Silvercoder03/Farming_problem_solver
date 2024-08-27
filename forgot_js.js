// script.js

document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
         event.preventDefault();
         
         const email = document.getElementById('email').value;
         const responseMessage = document.getElementById('response-message');
         
         if (validateEmail(email)) {
             sendOTP(email).then(response => {
                 if (response.success) {
                     responseMessage.textContent = 'OTP sent successfully. Check your email.';
                 } else {
                     responseMessage.textContent = 'Failed to send OTP. Please try again.';
                 }
             });
         } else {
             responseMessage.textContent = 'Invalid email address.';
         }
     });
     
     function validateEmail(email) {
         // Basic email validation
         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return re.test(email);
     }
     
     async function sendOTP(email) {
         // Simulate sending OTP and getting response
         // Replace with actual API call
         try {
             const response = await fetch('/api/send-otp', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ email })
             });
             return await response.json();
         } catch (error) {
             console.error('Error sending OTP:', error);
             return { success: false };
         }
     }
     