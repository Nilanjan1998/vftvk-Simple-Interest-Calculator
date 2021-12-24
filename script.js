
        function updateTextInput(val) {
          document.getElementById('textInput').innerHTML=val+'%'; 
        }

function compute(){
	var amount=document.getElementById('principal').value;
	var interest=parseFloat(document.getElementById('range').value);
	var years=parseInt(document.getElementById('years').value);
	var totalAmount=(amount*interest*years)/100;
	var currentYear=new Date().getFullYear()+years;
	document.getElementById('finalValue').innerHTML='If you deposit '+amount
+',<br>'+
	'at an interest rate of '+interest+'%.<br>'+'You will receive an amount of '+totalAmount+',<br>'
	+'in the year '+currentYear;
}
