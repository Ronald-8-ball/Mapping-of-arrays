var numbers = [9,12,911,112,87]
function myFunction(num){
return num * 10
}
var newarray = numbers.map(myFunction)
document.getElementById("p1").innerHTML = newarray