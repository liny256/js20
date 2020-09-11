var xmlhttp = new XMLHttpRequest();
var url = "data-json.txt";
var data= [];
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status ==200){
    data = JSON.parse(this.responseText);
    console.log(data);
    buildIndex(data);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

//build functions
function buildIndex(data){
  for (i=0; i<data.length; i++){
    var item= document.createElement("li");
    item.classList.add("items");
    item.classList.add(data[i].num);
    item.classList.add(data[i].ProjectName);

    var elem= document.createElement("a");
    elem.innerText= data[i].ProjectName;
    // elem.href

    var colorBlock= document.createElement("div");
    item.appendChild(colorBlock);

    item.appendChild(elem);
    document.querySelector('.result').appendChild(item);
  }
}
