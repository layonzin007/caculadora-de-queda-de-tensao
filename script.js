function calcular()
{
  console.log("funcao calcular");
  var r= document.getElementById("material").value;
  var c= document.getElementById("com").value;
  var a = document.getElementById("area").value;
  var corrente = document.getElementById("corrente").value;
  var re = (r*c)/a;
  var v= re*corrente;
  console.log("area="+area);
  console.log("com="+com);
  console.log("corrente"+corrente);
  console.log("ten"+ten);
  var ten=v.Exponential(3);
  document.getElementById("ten").innerHTML= "Queda de tensão:"+ten+"(V)";
}
