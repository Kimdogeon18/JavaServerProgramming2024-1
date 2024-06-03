/**
 * 
 */
function calcjs(){
	 var n1 = parseFloat(document.getElementById("n1").value)
	 var n2 = parseFloat(document.getElementById("n2").value)
	 var ans = document.getElementById("ans")
	 var op = document.getElementById("op").value
	 
	 switch(op){
		 case "+": result = n1 + n2; break;
		 case "-": result = n1 - n2; break;
		 case "*": result = n1 * n2; break;
		 case "/": result = n1 / n2; break;
	 }
	 ans.value = result
}