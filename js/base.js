/**
 * Desenvolvido por Ricardo Pinto <@ricard0pinto>


jQuery.easing.def = "easeOutQuad";

$(document).ready(function()
{
	 */
	// Remove o preloader depois de carregar o site
	$(window).load(function() {
		$('#sitePreloader').delay(200).fadeOut(500, function() {
			$(this).remove();
		});
		
		// Fade in
		$(".area").delay(700).fadeIn(500);
	});

	// Para incorporar o video em rácios de ecrãs de smartphones e tablets
	$(".video").fitVids();
/**
	//navegação da página
	var seInicioPagAtual = true;
	var sePainelConvidadosPagAtual = false;
	var seEventosPagAtual = false;
	var seArquivoPagAtual = false;

	$("#logoTicSociedadeInicio").click(function()){
		window.location = "../index.php";
	});

	$("#inicioPag, #logoTicSociedade").click(function())
	{
		if(!seInicioPagAtual)
		{
			seInicioPagAtual = true;
			sePainelConvidadosPagAtual = false;
			seEventosPagAtual = false;
			seArquivoPagAtual = false;
			$("#inicioPag").attr("class", "pagAtual");
			$("#painelConvidadosPag", "#eventos", "#arquivo").removeClass("pagAtual");
					
			$("#painelConvidados", "#eventos", "#arquivo").fadeoOut(500, function()
			{
				$("#inicio").fadeIn(500);
			});
		}
	});

	$("#painelConvidadosPag").click(function())
	{
		if(!sePainelConvidadosPagAtual)
		{
			sePainelConvidadosPagAtual = true;
			seInicioPagAtual = false;
			seEventosPagAtual = false;
			seArquivoPagAtual = false;
			$("#painelConvidadosPag").attr("class", "pagAtual");
			$("#inicioPag", "#eventosPag", "#arquivoPag").removeClass("pagAtual");
			
			$("#inicio", "#eventos", "#arquivo").fadeOut(500, function()
			{
				$("#painelConvidados").fadeIn(500);
			});
		}
	});

	$("#eventosPag").click(functio())
	{
		if(!seEventosPagAtual)
		{
			seEventosPagAtual = true;
			seInicioPagAtual = false;
			sePainelConvidadosPagAtual = false;
			seArquivoPagAtual = false;
			$("#eventosPag").attr("class", "pagAtual");
			$("#inicioPag", "#painelConvidadosPag", "#arquivoPag").removeClass("pagAtual");
			
			$("#inicio", "#painelConvidados", "#arquivo").fadeOut(500, function()
			{
				$("#eventos").fadeIn(500);
			});
		}
	});

	$("#arquivoPag").click(functio())
	{
		if(!seEventosPagAtual)
		{
			seArquivoPagAtual = true;
			seInicioPagAtual = false;
			sePainelConvidadosPagAtual = false;
			seEventosPagAtual = false;
			$("#arquivoPag").attr("class", "pagAtual");
			$("#inicioPag", "#painelConvidadosPag", "#eventosPag").removeClass("pagAtual");
			
			$("#inicio", "#painelConvidados", "#eventos").fadeOut(500, function()
			{
				$("#arquivo").fadeIn(500);
			});
		}
	});
	//define a pagina atual
	$("#inicioPag").attr("class", "pagAtual");
	//oculta as outras paginas
	$("#painelConvidados", "#eventos", "#arquivo").fadeOut(0);
	//fade in na area interior dos conteudos das paginas
	$(".area").css("display", "none");

});
*/