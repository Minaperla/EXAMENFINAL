var $logo = $("<div id='despliegue'></div>");
var $imagen = $("<img>");
var $galery = $("<p></p>");

&despliegue.append($imagen);
&despliegue.append($leyendo);
&("body").append($despliegue);


$("#foto li a").click(function(event) 
{
	event.preventDefault();

	var href=$(this).attr("href");
	$imagen.attr("src",href);

	var texto = $(this).children("img").attr("alt");

	$leyenda.text(texto);

	$despliegue.show();
	console.log(href);
}); 

{
	$despliegue.hide();
});