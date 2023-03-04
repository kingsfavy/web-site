function myFunc(){
  alert("sign up successfully, you have to login with the passcode");
}

function validateForm(){
  
}

function myc(){
  alert("login successfully");
}

function mnc(){
  alert("please provide a valid details");
}

  function getRandomInt(min, max) {
     document.getElementById("demo").innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
   var cookie= document.cookie;
   
  
   
function myc(){
         var number= document.getElementsByName("number")[0].value;
         if(number == "")
         {
            prompt("Please enter your passcode  on the text field!");
            return false;
         }
         else{
           alert("login successfully");
           return true;
         }
      }
      
      function getValue(){
       var x = location.pathname;
       alert ("uploaded successfully");
     }
     
     function myFunc(){
       var y = location.pathname;
       alert("signed up successful, login in your passcode" + " " + y);
     }
     
     function myFunct(){
       var u = location.hostname;
       alert("your passcode is " + " " + u);
     }
     
     var submit = document.getElementById("submit");
      submit.onclick = function() {
         var age = parseInt(document.getElementById("age").value);
         try {
            if(age < 18) {
               throw "user must be 18 or above to enter";
            } else {
               document.getElementById("demo").innerHTML = "user is 18 or above";
            }
         }
         catch(err) {
            document.getElementById("demo").innerHTML = err;
         }
      }
      
   

   
      var list = document.getElementById("list");
      
      function removeFirstChild() {
         // select the first child element of the list
         var firstChild = list.firstElementChild;
      
         // remove the first child
         firstChild.remove();
      }
      
      

   
      var list = document.getElementById("list");
      
      function appendContent() {
         var li = document.createElement("li");
         var textNode = document.createTextNode("Strawberry");;
         li.appendChild(textNode);
      
         list.append(li);
      }
      
      var element = document.createElement("p");
      var textNode = document.createTextNode("Lorem ipsum dolor sit amet.");
      element.appendChild(textNode);
      
      document.getElementById("demo").appendChild(element);
      
      var list = document.getElementById("list");
      
      function replaceContent() {
         list.innerHTML = "";
      }
      
      function fadeOut() {
         var elem = document.getElementById("demo");
      
         elem.style.opacity = 0;
         setTimeout(function() {
            elem.style.display = "none";
         }, 1000);
      }
      
      function fadeOut() {
         var elem = document.getElementById("demo");
      
         elem.style.opacity = 0;
         setTimeout(function() {
            elem.style.display = "none";
         }, 1000);
      }
      
      function fadeIn() {
         var elem = document.getElementById("demo");
       
         elem.style.display = "block";
      
         // wait a little bit before setting opacity to 1
         setTimeout(function() {
            elem.style.opacity = 1;
         }, 10);
      }
      function slideUp() {
         var elem = document.getElementById("demo");
      
         elem.style.maxHeight = "0px";
      }
      
      function slideDown() {
          var elem = document.getElementById("demo");
       
          elem.style.maxHeight = "100px";
      }
      
      function readFile() {
         var reader = new FileReader();
         var file = document.getElementById('demo').files[0];
   
         reader.onload = function(e) {
            document.getElementById('result').src = e.target.result;
         }
   
         reader.readAsDataURL(file);
      }
      
      var httpRequest = new XMLHttpRequest();
      function sendPostRequest() {
         httpRequest.onreadystatechange = writeContent;
      
         httpRequest.open("POST", "https://codeliber.com/test-server.php");
         httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
         httpRequest.send("firstName=John&lastName=Doe");
      }
      function writeContent() {
         if(httpRequest.readyState === 4) {
            if(httpRequest.status == 200) {
               document.getElementById("demo").innerHTML =
               httpRequest.responseText;
            } else {
               alert('There was a problem with the request.');
            }
         }
      }
      
      var img = document.getElementById("demo");
      function setSrcAttribute() {
         img.setAttribute("src", "images/");
      }
      
      function chat(){
      var get = prompt("");
      document.getElementById("elem").innerHTML=get;
      }
      
      
      function nice(){
        var number = prompt("");
      document.getElementById("firstelem").innerHTML=number;
      }