var first = true;
function setup(){
  if(first == true){
    window.open("first.html");
    first = false;
    return true;
  }
  else{
    window.open("feed.html");
    return False;
  }
}

var language;
var country;
var teachstu;
function handleLanguage(event){
  language = event.target.value;
  console.log(language);
}

function whocountry(event){
  country = event.target.value;
  console.log(counrty);
}
function who(event){
  teachstu = event.target.value;
  console.log(teachstu);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function droptop() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
