function somar() {
    var num1 = document.getElementById
}
function somar(){ 
    var num1 = document.getElementById ("n1").value;
    var num2 = document.getElementById ("n2").value;
    var  resultado = document.getElementById ("res");
    num1 = Number (num1)
    num2 = Number (num2)
    resu = num1 + num2
    resultado.innerHTML = (`o resultado da soma entre ${num1} + ${num2} e igual a ${resu}`)
}
var nome = window.prompt (`qual seu nome`) //var guarda o nome
document.write(`ola ${nome}.seu nome tem ${nome.length} letras <br>`)
///
document.write(`seu nome em maiusculo e ${nome.toLocaleUpperCase()} <br>`)
document.write(`seu nome em minusculo e ${nome.toLocaleUpperCase()} <br>`)

var n1 = 21.98565
///n1.toFixed(2)
window.alert(n1.toFixed(2).replace(`.` , `.`))