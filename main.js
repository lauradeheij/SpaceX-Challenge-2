var container = document.querySelector('.container');

function startTime() { //functie voor de tijd
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var u = today.getUTCHours();
    m = checkTime(m);
    s = checkTime(s);
  
    document.getElementById('clock').innerHTML = //aanroepen van id voor eerste de klok
    h + ":" + m + ":" + s + " UTC+1 (Amsterdam)";

    document.getElementById('clock2').innerHTML = //aanroepen van id voor de tweede klok
    u + ":" + m + ":" + s + " UTC";
    
    var t = setTimeout(startTime, 500);
  };

  function checkTime(i) { //tijd checken om te kijken of er een nul bij moet 
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  };
  startTime();

function dayAndNight(){ //functie voor wisselen met dag en nacht
  var h = new Date();
  var hours = h.getHours();
  if (hours >= 8 && hours <= 12 ){
    container.classList.remove('nacht'); //voor de dag lay-out
    container.classList.add('dag');
  } else {
    container.classList.remove('dag'); //voor de nacht lay-out
    container.classList.add('nacht');
  }
}
dayAndNight();

var today= new Date(); //nieuwe variable aanmaken voor datum
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'); //var maanden aanmaken
var dagenWeek = new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'); //var dagen van de week aanmaken
document.getElementById('clock3').innerHTML = dagenWeek[today.getDay()] + ' ' +  today.getDate() + ' ' + maanden[today.getMonth()+1]; //variabelen combineren zodat er staat welke dag van de week het is en welke datum


