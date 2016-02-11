'use strict';


//var text=document.getElementById("text");
function getTable(data){
    var strTable = "<table id='strTable'>";
    for (var i =0; i < data.content.length; i++){     //ukazqvat objazatelno, 4to .content, esli 4erez JSON file
        strTable+= "<tr>";
        strTable+= "<th id='ids'>ID</th>";
        strTable+= "<td>"+data.content[i].newsID+"</td>";
        strTable+= "<th>Title</th>";
        strTable+= "<td>"+data.content[i].Header+"</td>";
        strTable+= "<th>Theme</th>";
        strTable+= "<td>"+data.content[i].Theme+"</td><br>";
        strTable+= "<th>Date</th>";
        strTable+= "<td>"+data.content[i].Dates+"</td>";
        strTable+= "<th>Author</th>";
        strTable+= "<td>"+data.content[i].Author+"</td>";
        strTable+= "</tr>";
        strTable+= "<tr id='contentFull'>";
        strTable+= "<td id='contentCSS' colspan='4'>"+data.content[i].Text+"</td>";
        strTable+= "</tr><br>";
    }
    strTable+= "</table>";
    return strTable;
}

var xhr = new XMLHttpRequest();
xhr.onload = function(){
    console.log(xhr.responseText);
    var data = JSON.parse(xhr.responseText);
    document.getElementById("content").innerHTML=getTable(data);
}

xhr.open("GET","js/text.txt",true); //method, resource, asynchronous/synchronous
xhr.send();                 //sending request to the mentioned resource


//data.content[i].Header   //gde 'data' - nazvanie funkcii
//data.content[i].Theme

//----------------------------------------------------------------
/*function Calendar4(id, year, month) {
//podpravit div; prototipirovanie (4to takoe protoripq),nasledovanie po prototipu
Date.prototype.getWeek = function () {
    var target  = new Date(this.valueOf());
    var dayNr   = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}

var Dlast = new Date(year,parseFloat(month)+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = D.getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    m = document.querySelector('#'+id+' option[value="' + D.getMonth() + '"]'),
    g = document.querySelector('#'+id+' input');

if (new Date(D.getFullYear(),D.getMonth(),1).getWeek() < 10) {
  calendar = '<tr><td>0' + new Date(D.getFullYear(),D.getMonth(),1).getWeek();
}else{
  calendar = '<tr><td>' + new Date(D.getFullYear(),D.getMonth(),1).getWeek();
}

if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}

for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    if (
        (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) ||
        (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) ||
        ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) ||
        (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) ||
        (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) ||
        (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) ||
        (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) ||
        (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) ||
        (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) ||
        (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) ||
        (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) ||
        (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004)
       ) {
      calendar += '<td class="holiday">' + i;
    }else{
      calendar += '<td>' + i;
    }
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0 && i != Dlast) {
    if (new Date(D.getFullYear(),D.getMonth(),i).getWeek() < 9) {
      calendar += '<tr><td>0' + new Date(D.getFullYear(),D.getMonth(),i+1).getWeek();
    }else{
      calendar += '<tr><td>' + new Date(D.getFullYear(),D.getMonth(),i+1).getWeek();
    }
  }
}

if (DNlast != 0) {
  for(var  i = DNlast; i < 7; i++) calendar += '<td>';
}

document.querySelector('#'+id+' tbody').innerHTML = calendar;
g.value = D.getFullYear();
m.selected = true;

if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td><td><td><td><td><td><td>';
}

document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)';

}

Calendar4("calendar4",new Date().getFullYear(),new Date().getMonth());
document.querySelector('#calendar4').onchange = function Kalendar4() {
  Calendar4("calendar4",document.querySelector('#calendar4 input').value,document.querySelector('#calendar4 select').options[document.querySelector('#calendar4 select').selectedIndex].value);
}*/