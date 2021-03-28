'use strict'

const boton = {
	estado: false,
	jugador: null
}
class jugador
{

	constructor ()
	{
		let Nombre ="";
		let puntuacion=0;
		let figura="";
		let color="";
	}
}
let turno = 0;
const estadoJuego = true;
let puntuacion=0;

const bt = document.querySelector('.boton');
const jug1=new jugador();
const jug2=new jugador();

<<<<<<< HEAD
=======
var punt1 = document.getElementById("punt1");
var punt2 = document.getElementById("punt2");

>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053

const estado=0;
let nom=document.getElementById("Jug1");
let nom2=document.getElementById("Jug2");
if (estado==0)
{
	jug1.figura="X";
	jug1.color="red";
	jug2.figura="O";
	jug2.color="blue";
	jug1.puntuacion = 0;
	jug2.puntuacion = 0;
	jug1.Nombre=prompt("Ingrese el nombre del jugador 1");
	nom.innerHTML=jug1.Nombre;
	jug2.Nombre=prompt("Ingrese el nombre del jugador 2");
	nom2.innerHTML=jug2.Nombre;
<<<<<<< HEAD
var punt1 = document.getElementById("punt1");
var punt2 = document.getElementById("punt2");
=======
	
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
}
else
{


}

function Presionar(comp){
		
	var BTN = document.getElementById(comp.id);

		if(BTN.innerHTML==""){
			if(turno==0)
			{
					BTN.innerHTML = jug1.figura;
					BTN.style.backgroundColor=jug1.color;
					
					validar(jug1);

					turno = 1;
			}
			else{
					BTN.innerHTML = jug2.figura;
					BTN.style.backgroundColor=jug2.color;
					validar(jug2);
	
					turno = 0;
			}
			
		}
		if(jug1.puntuacion >=3){
			//document.getElementById("setear").style.hidden = "false";
			alert("aaaaaa");
		}
		if(jug2.puntuacion>=3){
			alert("bbbbbb");	
		}
	}

<<<<<<< HEAD
	if(jug1.puntuacion > 0 || jug2.puntuacion > 0)
	{
	punt1.innerHTML = jug1.puntuacion;
	punt2.innerHTML = jug2.puntuacion;
	}
=======
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053

function validar(player){

	let pos2 = document.querySelector("#Pos2");
let pos1 = document.querySelector("#Pos1");
let pos3 = document.querySelector("#Pos3");
let pos4 = document.querySelector("#Pos4");
let pos5 = document.querySelector("#Pos5");
let pos6 = document.querySelector("#Pos6");
let pos7 = document.querySelector("#Pos7");
let pos8 = document.querySelector("#Pos8");
let pos9 = document.querySelector("#Pos9");


if(pos1.innerHTML ==player.figura &&
	pos2.innerHTML ==player.figura &&
	pos3.innerHTML ==player.figura
)
	
{
<<<<<<< HEAD
	player.puntuacion++;
	if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
	
	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre} ${player.puntuacion}`);
}
if(pos4.innerHTML ==player.figura &&
	pos5.innerHTML ==player.figura &&
	pos6.innerHTML ==player.figura
	)
	
<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
	{	
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}
if(pos7.innerHTML ==player.figura &&
	pos8.innerHTML ==player.figura &&
	pos9.innerHTML ==player.figura
)
	


<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
{	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}
if(pos1.innerHTML ==player.figura &&
	pos5.innerHTML ==player.figura &&
	pos9.innerHTML ==player.figura
	)
	
<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
{	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}
if(pos3.innerHTML ==player.figura &&
	pos5.innerHTML ==player.figura &&
	pos7.innerHTML ==player.figura
)
	
<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
{	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}
if(pos1.innerHTML ==player.figura &&
	pos4.innerHTML ==player.figura &&
	pos7.innerHTML ==player.figura
)
	
<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
{	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}
if(pos2.innerHTML ==player.figura &&
	pos5.innerHTML ==player.figura &&
	pos8.innerHTML ==player.figura
)
	
<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
{	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}
if(pos3.innerHTML ==player.figura &&
	pos6.innerHTML ==player.figura &&
	pos9.innerHTML ==player.figura
)
	
<<<<<<< HEAD
{	player.puntuacion++;
		if(player.figura == "X"){
		punt1.innerHTML = player.puntuacion.toString();
	}
	else{
		punt2.innerHTML = player.puntuacion.toString();	
	}

=======
{	
	Cargarpuntos(player);
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
	alert(`GANO EL JUGADOR ${player.Nombre}`);
}


}
<<<<<<< HEAD
function setear(){

	let pos2 = document.querySelector("#Pos2");
	let pos1 = document.querySelector("#Pos1");
	let pos3 = document.querySelector("#Pos3");
	let pos4 = document.querySelector("#Pos4");
	let pos5 = document.querySelector("#Pos5");
	let pos6 = document.querySelector("#Pos6");
	let pos7 = document.querySelector("#Pos7");
	let pos8 = document.querySelector("#Pos8");
	let pos9 = document.querySelector("#Pos9");
	pos2.style.backgroundColor = "White";
	pos1.style.backgroundColor = "White";
	pos3.style.backgroundColor = "White";
	pos4.style.backgroundColor = "White";
	pos5.style.backgroundColor = "White";
	pos6.style.backgroundColor = "White";
	pos7.style.backgroundColor = "White";
	pos8.style.backgroundColor = "White";
	pos9.style.backgroundColor = "White";
	pos1.innerHTML = "";
	pos2.innerHTML = "";
	pos3.innerHTML = "";
	pos4.innerHTML = "";
	pos5.innerHTML = "";
	pos6.innerHTML = "";
	pos7.innerHTML = "";
	pos8.innerHTML = "";
	pos9.innerHTML = "";

}
=======

function Cargarpuntos(player)
{
	if (player.figura=="X")
	{
		
		punt1.innerHTML=++player.puntuacion;

	}
	else if (player.figura=="O"){
		
		punt2.innerHTML=++player.puntuacion;
	}





}
>>>>>>> ba47e31a38c00f4aff6e3450bea1c639fc475053
