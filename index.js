"use strict";

const name = document.getElementById('name');                       // select "name" element
const password = document.getElementById('password');               // select "password" element
const form = docuemnt.getElementById('form');                       // select "form" element

form.addEventListener('submit', function(event) {                        
    let messages = [];                                              // "messages" storing all the error messages for the form validation.
    if (name.value === '' || name.value == null) {                    // then check for errors... so if the name.value is equal to an empty string or null (usr didnt put in a password)
        messages.push('Name is required')
    }
        event.preventDefault()                                          // prevent page from submitting
});