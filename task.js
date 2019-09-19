var pw = new Array()
var us= new Array()
var flag;
var loggedIn=false;


function validate()
{
    val=true;
    if(( document.getElementById("commodityname").value == "")||( document.getElementById("description").value == "")||( document.getElementById("price").value == "")||( document.getElementById("category").value == ""))
    {
    alert("All fields are compulsory"); 
    val=false;
    }
    else if((document.getElementById("price").value)<0)
    {
    alert("Price can't be negative"); 
    val=false;
    }
    else{
        val=true;
    }
    return val;
    
}

function changeSettings() 
{
  if(loggedIn == true) 
  {
     
  } 
  else if(loggedIn == false)
  {
    alert("You must be logged in to do that.")
  }
}


function signup() 
{
  if(typeof(Storage)!= "undefined") 
  {
    
    var username = []; var password=[];
    if(window.localStorage["username"] != null)
    username = JSON.parse(window.localStorage["username"]);
    username.push(document.getElementById("textbox").value);
    window.localStorage["username"] = JSON.stringify(username);
    
    if(window.localStorage["password"] != null)
    password = JSON.parse(window.localStorage["password"]);
    password.push(document.getElementById("textbox2").value);
    window.localStorage["password"] = JSON.stringify(password);
    
    alert("Succesfully Registered")
  }
}

function login() 
{
  us = JSON.parse(localStorage.getItem("username"));
  pw= JSON.parse(localStorage.getItem("password"));
  var usernameInput = document.getElementById("textbox3").value;
  var passwordInput = document.getElementById("textbox4").value;
  if(usernameInput!="" && passwordInput!="")
  {   for(var v=0; v < us.length; v++)
    {
      if(usernameInput == us[v] && passwordInput == pw[v]) 
      {
        flag= true;
        break;
      } 
      
      else
      {
        flag = false; 
      } 
    }
    
  }
  if(flag == true)
  {
    alert("Logged in!");
    loggedIn = true;
    loadSettings();
  }
  else
  {
    alert("Wrong password/username!");
    loggedIn = true;
  }
} 

function logout()
{
  if(loggedIn == true)
  { 
    hideLogout();
  }
  else
  alert("You should Log in first")
}

function hideLogout()
{
  document.getElementById('login').style.visibility = 'hidden';
}


addname.value = localStorage.getItem('addname');
addname.oninput = () => {
  localStorage.setItem('addname', addname.value)
};


function clos()
{
  window.open("complaints.html","_blank");
  setTimeout('self.opener=null;self.close()',500);
}

