var xmlhttp = new XMLHttpRequest();
var url = "data-jason.txt";
var data= [];
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status ==200){
    data = JSON.parse(this.responseText);
    console.log(data);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
