$(document).ready(function(){
	$("input[name=codigo]").blur(function(){
		var codigo = $(this).val();

		if(codigo){
			var url = 'https://webapi.toqueacampainha.com.br/api/estoque/produtoprontaentrega?refid='+codigo;

		   $.ajax({
                url: url,
                dataType: 'json',
                crossDomain: true,
                contentType: "application/json", 


                success : function(qtd_produto){
                	if(qtd_produto >=1){
	   					$(".resultado").html("Há " + qtd_produto + " produtos desse tipo em estoque!");
	   				}	

	   				else{
	   					$(".resultado").html("Não há produtos desse tipo no estoque!");
	   				}	
				}
			});
		}				
	});	
});
