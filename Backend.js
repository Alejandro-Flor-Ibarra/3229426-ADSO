    function Operaciondesuma() {
      let num1 = document.getElementById("cajasuma1").value;
      let num2 = document.getElementById("cajasuma2").value;
      let totalsuma = parseInt (num1) + parseInt (num2)
      document.getElementById("elresul").innerText = "El resultado es: " + totalsuma;
      
    }
console.log
    function Operacionderesta() {
      let num1rest = document.getElementById("cajaresta1").value;
      let num2rest = document.getElementById("cajaresta2").value;
      let totalresta = parseInt (num1rest) - parseInt (num2rest)
      document.getElementById("elresulresta").innerText = "El resultado es: " + totalresta;
    }
    function Operacionmultiplicacion() {
      let num1multi = document.getElementById("cajamulti1").value;
      let num2multi = document.getElementById("cajamulti2").value;
      let totalmulti = parseInt (num1multi) * parseInt (num2multi)
      document.getElementById("elresulmulti").innerText = "El resultado es: " + totalmulti;
    }
    function Operaciondivision() {
      let num1div = document.getElementById("cajadiv1").value;
      let num2div = document.getElementById("cajadiv2").value;
      let totaldiv = parseInt (num1div) / parseInt (num2div)
      document.getElementById("elresuldiv").innerText = "El resultado es: " + totaldiv;
    }
    function name(params) {
      
    }