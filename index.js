var i=0;
for(i=0;i<10;i++){
    document.write(i);

    console.log(i);
}
document.getElementById("newBtw").onclick=getmethod;
function getmethod(){
    document.getElementById("index1").innerHTML="this p tag content change Sucessfully";
   // document.write("<p><h1>This is Dyanamic addeed Tag h1 in webpage<h1><p>");
     document.getElementById("index2").innerHTML=Date();
}

