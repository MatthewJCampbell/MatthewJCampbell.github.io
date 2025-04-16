function showMessage() 
{
    let x = 5; 
    let name = "Matthew";
    let age = 35; 
    let school = "SADT"
    let birthYear = 1989;
    let message = "Hello " + name + ", you are " + age + " years old and you study at " + school+ ". You were born in " + birthYear + ", you old man!";
    alert (message);
}

function checkAge() 
{
    let age = 17; 
    if (age >= 18) 
    {
    alert ("You are an adult.");
    }
    else 
    {
        alert ("Stay in school kid. Too Young!");
    }
}
function showMany()
{
    for(let i=1; i<=3; i=i+1)
    {
        alert("Don't close me!!! You clicked me " + i + " times.");

    }
}

function changeColor()
{
    document.getElementById("main").style.color="salmon";
}
    
function changeBeans()
{
    document.getElementById("coffee").src="pexels-juanpphotoandvideo-894695.jpg";

}
function changeToCoffee()
{
    document.getElementById("coffee").src="pexels-viktoria-alipatova-1083711-2074130.jpg";
}

function hoverOver() 
{
    document.getElementById("hoverButton").style.background="red";
}
function hoverOut() 
{
    document.getElementById("hoverButton").style.background="green";
}
function clickCounter() {
    const x = document.getElementById("result");
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      x.innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s)!";
    } else {
      x.innerHTML = "Sorry, no Web storage support!";
    }
  }
