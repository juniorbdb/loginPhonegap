dados = {}

data = {

	init: function(){
		document.addEventListener("deviceready", this.onDeviceReady, false);

		var btn = document.getElementById("btn-login");
		btn.addEventListener("click", this.verificaUsuario, false); 
	},

	onDeviceReady: function(){

		var t = localStorage.getItem("dados");

		if (t) {
			$("#login").hide();
			$("#conteudo").removeClass("hidden");
		}
		
	},

	verificaUsuario: function(){
		
		dados.usuario = $("#login-adm").val();
		dados.senha = $("#senha_adm").val();
		
		
		$("#msg").html('<img src="350.gif" alt="" />');

		$.ajax({
			type: "GET",
			url: "http://meumobile.url.ph/api-json/consulta-json.php",
			data: dados,
			dataType: "json",
			crossDomain: true
		}).done(function(msg){
			if(msg.resultado == 1){
				//localStorage.setItem("data", JSON.stringify(dados));
				alert();
			}
			else {
				$("#msg").html(msg.mensagem);
				console.log();
			}
				
		});
	}

	
};
