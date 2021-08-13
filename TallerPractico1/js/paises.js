
var deptosGT = ["Alta Verapaz", "Baja Verapaz","Chimaltenago","Chiquimula","Guatemala","El Progreso","Escuintla",
"Huehuetenango","Izabal","Jalapa","Jutiapa","Petén","Quetzaltenango", "Quiché", "Retalhuleu",
"Sacatepequez","San Marcos","Santa Rosa","Sololá","Suchitepequez","Totonicapán","Zacapa"];

var deptosES = ["Ahuachapán", "Santa Ana", "Sonsonate", "Chalatenango",
"La Libertad","San Salvador","Cuscatlán","La Paz","Cabañas",
"San Vicente","Usulután","San Miguel","Morazán","La Unión"]

var deptosCR = ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"]

var deptosHN = ["Comayagua", "Tegucigalpa", "Gracias", "Santa Bárbara", "Yoro", "Olancho", "Choluteca"]

var deptosNI = ["Atlántico Norte", "Atlántico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", 
"Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas"]

var deptosPA = ["Panamá","Colón","Darién","Coclé","Veraguas","Bocas del Toro","Herrera","Los Santos","Chiriquí"]

function stringuear(arregloPais){
	var elemento = "";
	for (var i = 0; i <= arregloPais.length - 1; i++) {
		elemento += "<option value='" + (i+1) + "'>" + arregloPais[i] + "</option>"
	}
	return elemento;
}

function imprimirDeptos(pais){
	var arregloString = "";
	var arregloPais = "";
		if (pais== 1) {
			var arregloPais = deptosGT;
			arregloString = stringuear(arregloPais);
			document.getElementById('departamentoResidencia').innerHTML = arregloString;
		}
		if (pais== 2) {
			var arregloPais = deptosES;
			arregloString = stringuear(arregloPais);
			document.getElementById('departamentoResidencia').innerHTML = arregloString;
		}
		if (pais== 3) {
			var arregloPais = deptosCR;
			arregloString = stringuear(arregloPais);
			document.getElementById('departamentoResidencia').innerHTML = arregloString;
		}
		if (pais== 4) {
			var arregloPais = deptosHN;
			arregloString = stringuear(arregloPais);
			document.getElementById('departamentoResidencia').innerHTML = arregloString;
		}
		if (pais== 5) {
			var arregloPais = deptosNI;
			arregloString = stringuear(arregloPais);
			document.getElementById('departamentoResidencia').innerHTML = arregloString;
		}
		if (pais== 6) {
			var arregloPais = deptosPA;
			arregloString = stringuear(arregloPais);
			document.getElementById('departamentoResidencia').innerHTML = arregloString;
		}
	


	
	
}