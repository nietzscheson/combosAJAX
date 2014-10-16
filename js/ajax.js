$(document).on("ready",function(){

	$("select[name='pais']").change(function(){

		id = $(this).val();

		$.post("inc/model.php","id="+id,function(datos){
			$("select[name='ciudades']").html("");
			options = "<option>Seleccione</option>";
			$("select[name='ciudades']").append(options);
			for(i = 0; i < datos.length; i++){
				$("select[name='ciudades']").append("<option>"+datos[i]+"</option>");
			}
		},'json');

	});

});
