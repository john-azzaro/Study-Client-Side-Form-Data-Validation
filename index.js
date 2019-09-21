"use strict";

const name = document.getElementById('name');                            // select "name" element
const password = document.getElementById('password');                    // select "password" element
const form = document.getElementById('form');                            // select "form" element
const errorElement = document.getElementById('error');                   // select "error" element

form.addEventListener('submit', function(event) {                        
    let messages = [];                                                   // "messages" storing all the error messages for the form validation.
    if (name.value === '' || name.value == null) {                       // then check for errors... so if the name.value is equal to an empty string or null (usr didnt put in a password)
        messages.push('Name is required');
    }
    if (password.value.length <= 5 ) {                                   // if the password value is less than or equal to 5
        messages.push('Password must be longer than 5 characters');
    } 
    if (password.value.length >= 10 ) {                                  // if the password valuse is greater than or equal to 10
        messages.push('Password must be less than 10 characters');
    }
    if (password.value === 'password') {                                 // if the password is "password"
        messages.push('Password cannot be "password"')
    }
    if (messages.length > 0) {                                           // if there is some error (i.e. )
       event.preventDefault()                                            // prevent page from submitting if there is an error...
       errorElement.innerText = messages.join(', ')                      // For each error shown in the error box, seperate with a comma
    }
});