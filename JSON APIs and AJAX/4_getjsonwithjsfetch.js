/*
Another way to request external data is to use the JavaScript fetch() method. 
It is equivalent to XMLHttpRequest, but the syntax is considered easier to understand.

Here is the code for making a GET request to /json/cats.json


fetch('/json/cats.json')
.then(response => response.json())
.then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
})

Take a look at each piece of this code.

The first line is the one that makes the request. 
So, fetch(URL) makes a GET request to the URL specified. 
The method returns a Promise.

After a Promise is returned, 
if the request was successful, the then method is executed, 
which takes the response and converts it to JSON format.

The then method also returns a Promise, 
which is handled by the next then method. 
The argument in the second then is the JSON object you are looking for!

Now, it selects the element that will receive the data by using document.getElementById(). 
Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.
*/

/*
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
      // Add your code below this line
fetch('/json/cats.json')
.then(res => res.json())
.then(data => {
    document.getELementById('message').innerHTML = JSON.stringify(data);
})
      // Add your code above this line
    };
  });
</script>
*/