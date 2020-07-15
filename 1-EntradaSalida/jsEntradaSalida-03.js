/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//para buscar el id se puede hacer en la pagina con inspeccionar o en el archivo de arriba. 
	//el .value es importante porq muestra el valor del id 
	nombreIngresado=txtIdNombre.value;
	//nombreIngresado=document.getElementById('txtIdNombre').value
	alert(nombreIngresado);

}


