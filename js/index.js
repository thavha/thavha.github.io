

//const displayTopBarMenu = () =>{
// let topBarMenuId = document.getElementById("topBarMenu").style;
//if(topBarMenuId.display === "none"){
//    document.getElementById("topBarMenu").style.display = "grid";
//}else{
//     document.getElementById("topBarMenu").style.display = "none";
// }
//}
function myFunction() {

    var x = document.getElementById("myTopnav");

    if (x.className === "header") {

        x.className += " responsive";

    } else {

        x.className = "header";

    }

}