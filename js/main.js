function clicou2(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigada por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}
function clicou(){
    alert("obrigada por clicar")
}
function redirecionar(){
    window.open("https://www.google.com/"); // abre em outra aba
    window.location.href="https://www.google.com/"; // abre na mesma aba
}
function trocar(){
    document.getElementById("mousemove").innerHTML = "TROCOU";
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "VOLTOU";
}

function trocar2(elemento){
    elemento.innerHTML = "TROCOU";
}
function voltar2(elemento){
    elemento.innerHTML = "VOLTOU";
}
function load(){
    alert("carregou a pagina")
}
function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
comentario maior
*/

var nome = "Fabiana Cordeiro";
var idade = 39;
alert("Bem vindo, " + nome + " tem " + idade + "anos.");
//comentário
console.log(nome.toLowerCase);
console.log(nome.toUpperCase);
console.log(idade);
console.log(nome+idade)

var lista = ["maçã", "pera", "laranja"];
console.log(lista);
lista.push('uva');
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.reverse()); //faz a lista ficar ao contrário
console.log(lista.length);
console.log(lista.toString())//transforma o array em string
console.log(lista.toString()[0]);
console.log(lista.join("."))

var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome)
console.log(fruta.cor)

var frutas = [{nome:"maçã", cor:"vermelho"},{nome:"uva",cor:"roxa"}]
console.log(frutas[1].nome)
console.log(frutas[1].cor)

var numero = prompt("Qual sua idade?");
if(numero>=18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}
var count = 0;
while (count<5){
    console.log(count);
    count++;
}
var count1;
for (count1=0;count1<=5;count1++){
    alert(count1);
}
var d = new Date();
alert(d);
alert(d.getMonth()+1); //sempre conta do zero, então por mais 1
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getFullYear);

function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));


function validaIdade(idade1){
    var validar; // se não por o var é uma variavel global
    if (idade>=18){
        validar = true;
    }else{
        validar=false;
    }
    return validar;
}
var idade1=prompt("Qual sua idade?");
console.log(validaIdade(idade1));