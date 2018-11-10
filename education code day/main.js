var first = true;
function firstTime(){
  if(first == true){
    window.open("first.html");
    first = false;
    return true;
  }
  else{
    window.open("index.html");
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
