<?php

$id = $_POST["id"];

$ciudades [0] = array(
	"Bogotá","Medellín","Cali"
);

$ciudades [1] = array(
	"México","Cancún","Monterrey"
);

echo json_encode($ciudades[$id]);



?>
