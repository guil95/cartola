total = 0;
totalPositive = 0;
totalNegative = 0;

function setTotalPositive() {
	$(".cartola-time__lista-completa .pont-positiva").each(function(index){
		totalPositive += parseFloat($( this ).text());
	});
}

function setTotalNegative() {
	$(".cartola-time__lista-completa .pont-negativa").each(function(index){
		totalNegative += parseFloat($( this ).text());
	});
}

function setTotal() {
	total = totalPositive - totalNegative;
}

function showResult() {
	setTotalPositive();
	setTotalNegative();
	setTotal();
	console.log('Total Positivo: '+totalPositive);
	console.log('Total Negativo: '+totalNegative);
	console.log('Total Geral: '+total);
}
 
showResult();
  
                    
