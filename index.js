"use strict";

const name = document.getElementById('name');                       // select "name" element
const password = document.getElementById('password');               // select "password" element
const form = document.getElementById('form');                       // select "form" element
const errorElement = document.getElementById('error');                     // select "error" element

form.addEventListener('submit', function(event) {                        
    let messages = [];                                              // "messages" storing all the error messages for the form validation.
    if (name.value === '' || name.value == null) {                    // then check for errors... so if the name.value is equal to an empty string or null (usr didnt put in a password)
        messages.push('Name is required');
    }
    if (messages.length > 0) {                                        // if there is some error (i.e. )
       event.preventDefault()                                         // prevent page from submitting if there is an error...
       errorElement.innerText = messages.join(', ')                   // For each error shown in the error box, seperate with a comma


    }
        
});