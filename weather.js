console.log("page uploaded")

function clickCity(){
    alert("Loading weather report....")
}
//////////
function acceptCookie(){
    document.querySelector(".cookie").remove();
}

function fToC(tempInF){
    return Math.round((tempInF-32) * 5 / 9);
}

function cToF(tempInC){
    return Math.round(tempInC*9/5 +32);
}
/////////////////////////////////////////option2
const temps = document.querySelectorAll(".temp");
var parameter = document.querySelector(".tempreture_unit");
function chooseTempretureParameter(){
    temps.forEach((item) => {
        console.log(parameter.value)
        if(parameter.value=="C"){
            console.log(item.innerText)
            var tempInF =item.innerText;
            console.log(fToC(tempInF))
            item.innerText= fToC(tempInF);
        }else{
            console.log(item.innerText)
            var tempInC =item.innerText;
            console.log(cToF(tempInC))
            item.innerText= cToF(tempInC);
        }
    });
}

//function chooseTempretureParameter(element){
  //  console.log(element.value)
    //if(element.value=="C"){
      //  var tempInF =document.querySelector("#max_temp_today").innerText
        //document.querySelector("#max_temp_today").innerText= fToC(tempInF);
    //}else{
      //  var tempInC =document.querySelector("#max_temp_today").innerText
        //document.querySelector("#max_temp_today").innerText= cToF(tempInC);
    //}
//}