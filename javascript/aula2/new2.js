function multiplica(a,b){
console.log("function multiplica(a,b){...");
var resultado = a*b;
console.log("imprimindo resultado")
return a*b;
}
var resultadodafuncao = multiplica(5,2);
//alert(resultadodafuncao);

function paiscomp (paises){
	var i;
	for(i = 0; i < paises.length;i++){
		console.log(paises[i]);
	}
}
var paises = ["prussia","patagonia","peru","polonia","paquistao","portugal"];
paiscomp (paises);
console.log("quantidade de paises com p:"+paises.length);