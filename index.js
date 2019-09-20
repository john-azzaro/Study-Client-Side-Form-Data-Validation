"use strict";

const name = document.getElementById('name');                       // select "name" element
const password = document.getElementById('password');               // select "password" element
const form = docuemnt.getElementById('form');                       // select "form" element

form.addEventListener('submit', function(event) {                        
    let messages = [];                                              // "messages" storing all the error messages for the form validation.
    event.preventDefault()                                          // prevent page from submitting
});