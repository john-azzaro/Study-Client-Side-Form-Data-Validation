# Client-Side Form Validation Study

See it Live: https://john-azzaro.github.io/Study-Client-Side-Form-Data-Validation/

<br>

## What is the Client-Side Form Validation Study?
The Client-Side Form Validation Study is a handy exploration of data verification of form submissions.  In this example (see live demo), the user can
submit a name and a password.  Additional logic has been provided to make sure that the user submits a name and password that meet a certain criteria, such 
as a length minimum/limit, whether or not a password or name is provided and, if not, needs to be provided to successfully submit.

Here's some questions covered in the study:

* [Why use form data validation?](#Why-use-form-data-validation)
* [How do you implement client-side form data validation?](#How-do-you-implement-client-side-form-data-validation)
* [Does Client-Side Form Validation Study feature commentary?](#Does-Client-Side-Form-Validation-Study-feature-commentary)
* [What are the key features of the Client-Side Form Validation Study?](#What-are-the-key-features-of-the-Client-Side-Form-Validation-Study)
* [Screenshots](#Screenshots)

<br>

## Why use form data validation?
Form validation is used for user submission sections contact forms and any place you need to submit data to check and see if the data is correct.  For example, you might
need to have a name and password entered to have the login register successfully.  Form validation is essential make sure data submitted is correct, ensure the user has adequate 
protection by having name and passwords of a certian length, type, etc, and lastly for the saftey and security of your own application. 

There are two different ways to validate form data: *client-side* and *server-side*.  

* **Client-side validation** in the browser before data is submitted to the server and has a few benefits, including quicker response and is more user-friendly.  

* **Server-side validation**, which occurs after the data has been submitted to the server.  Although server-side validation isnt as user friendly due to the delay in form submission, data can be validated and sanitized.  

A good approach is to have a two-layer form data validation where basic error checking can be done on the client side and more complex validation done on the server side to cover all your bases.

<br>

## How do you implement client-side form data validation?
In the study example, you have a basic form with a user name, password, and a submission button.  However, before going any further remember that HTML has the built-in input attribute ```required``` that specifies that the input field mist be filled out before submission.  You will have validation logic that will check the same thing, but it seems best to have multiple layers of security at no cost to performance.
```html
    <form id="form" action="/" method="GET">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" required>                    <== "required" added to input tag
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required>        <== "required" added to input tag
         <button type="submit">Submit</button>
    </form>
```
<br>

After you assign your elements, you add your error checking to an event listener.  For the purpose of this study, we'll just do a few including name and password inclusion and length checks. The way this is set this up, we'll have a blank messages array that, should there be an applicable error, will be displayed on the screen.
```JavaScript
    form.addEventListener('submit', function(event) {                        
        let messages = [];             
        ...
        ...
        ...
    });
```

<br>

Now that we have a means of storing our messages, we need to first cancel out the form from submitting by adding an
``` event.preventDefault()```.  Next, we need to check to see if we have an error messages.  And lastly, we want to make sure that if there are multiple messaged, they can be joined in a legible way.  So whats happening here is that we want to prevent the form from submitting AND send the errors that we do have to the messages variable so that it can be displayed to the user in a way that we can clearly read it.
```JavaScript
    form.addEventListener('submit', function(event) {   
        let messages = [];  
        if (messages.length > 0) {                               // if there are any messages...
            event.preventDefault()                               // prevent defualt form submission...
            errorElement.innerText = messages.join(', ')         // and join multiple messages together.
        }
        ...
        ...
    });
```
<br>

Now suppose you want to make sure that the user submits a name.  A good way to do this is to check whether or not the field is empty.  So you insert a *if* statement and insert your logic.  In this case, we want to check that if either the value of the name (i.e. the user input value of "name") is empty OR the value is null, push the maessage "Name is required" to
the error message element for the user to see.

```JavaScript
    form.addEventListener('submit', function(event) {   
        let messages = [];  
        if (name.value === '' || name.value == null) {          // check to see if the name name is blank or null
            messages.push('Name is required');                  // and push to messages so the user can see the error.
        }
        if (messages.length > 0) { 
            event.preventDefault()  
            errorElement.innerText = messages.join(', ') 
        }
    });
```

For additional error checking, all you need to do is add additional if statements to the event listener!

<br>

## Does Client-Side Form Validation Study feature commentary?
Yes! Commentary be found in html, css, and javascripty files.  Additionally, I created a process notes file which gives a slightly more in-depth walk-through of
my process in implementing the form validation logic.

<br>

## What are the key features of the Client-Side Form Validation Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  For a complete list of current and future changes, see below:

| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| Form                                     |    name and password fields with submit button                                             |
| error checking logic                     |    name, password, length, etc.                                               |

<br>

## Screenshots
![formval1](https://user-images.githubusercontent.com/37447586/65300914-0a559100-db2a-11e9-9cc2-c4e6bc625cde.png)
![formval2](https://user-images.githubusercontent.com/37447586/65300915-0a559100-db2a-11e9-8ac1-65e9f9ad3f27.png)
![formval3](https://user-images.githubusercontent.com/37447586/65300916-0a559100-db2a-11e9-9851-3360d3d9efef.png)
