function getNumber(num){
    var result = document.getElementById("screen");
    result.value += num;
}                                      


function clearResult(){
    var result = document.getElementById("screen");
    result.value = ""

} 



function getResult(){
    var result = document.getElementById("screen");
    result.value =eval(result.value)
}
