(()=>{
	alert(`Seja bem vindo(a). Na próxima etapa você vai escolher qual desafio você quer participar, de acordo com o número informado. 
Para mais detalhes do projeto, favor olhar o repositório no Github`);
})();



let desafio= parseInt(prompt(`Favor, insira um dos números abaixos para escolher qual desafio participar:
	1- Calculadora 
	2- Montar uma lista de compras
	3- Adivinhar o número secreto
	4- Sobre as áres da tecnologia
	5- Sair`));
               
while(isNaN(desafio) || desafio<=0 || desafio>5){
		desafio= parseInt(prompt(`Favor, inserir apenas um dos números abaixos para escolher qual desafio participar:
	1- Calculadora 
	2- Montar uma lista de compras
	3- Adivinhar o número secreto
	4- Sobre as áres da tecnologia
	5- Sair`));
}



switch (desafio) {
	 case 1:

			function soma(n1,n2){
			alert('A soma dos dois número resultou em: ' + (n1 + n2).toFixed(2));
		}

		function subtracao(n1,n2){
			alert('A subtração dos dois número resultou em: ' + (n1 - n2).toFixed(2));
		}


		function multiplicacao(n1,n2){
			alert('A multiplicação dos dois número resultou em: ' + (n1 * n2).toFixed(2));
		}

		function divisao(n1,n2){
			alert('A divisão dos dois número resultou em: ' + (n1 / n2).toFixed(2));
		}



		var nome= undefined;
		while(null === nome || nome===undefined  || nome===''){
			nome= prompt('Olá!! Insira o seu nome, por gentileza');
		}


		let decisao='sim';


			while(decisao === 'sim') {

			let operacao= prompt(`${nome}, você quer fazer qual das seguintes operações de cálculo: \n => soma,subtração,multiplicação ou divisão? \n
			 Caso não queira calcular agora é só escrever a palavra sair`); 




			while(operacao !== 'soma' && operacao !== 'subtração' && operacao !== 'multiplicação' && operacao !== 'divisão' && operacao !== 'sair') {
				alert('Favor, escolher uma das opções apresentadas, considerando a acentuação na hora da escrita');
				operacao= prompt(`${nome}, você quer fazer qual das seguintes operações de cálculo: \n => soma,subtração,multiplicação ou divisão? \n
		 Caso não queira calcular agora é só escrever a palavra sair`); 
		}

				if(operacao==='sair'){
					decisao ='sair';
				}

			    while(operacao !== 'sair') {


				let numero1=parseFloat(prompt(`Você escolheu realizar uma ${operacao.toUpperCase(operacao)}. Insira o primeiro número`));
				
				while(isNaN(numero1)){			
					numero1=parseFloat(prompt(`Favor digitar apenas números e não palavras ou outros caracteres. Insira o primeiro número`));
				}

				let numero2=parseFloat(prompt('Insira o segundo número'));
				while(isNaN(numero2)){			
					numero2=parseFloat(prompt(`Favor digitar apenas números e não palavras ou outros caracteres. Insira o segundo número`));
				}





				switch (operacao) {

				case 'soma':
				soma(numero1,numero2);
				break;
				case 'subtração':
				subtracao(numero1,numero2);
				break;
				case 'multiplicação':
				multiplicacao(numero1,numero2);
				break;
				case 'divisão':
				divisao(numero1,numero2);
				break;

				}

				    decisao=prompt(`${nome}, deseja fazer mais algum outro cálculo? Responda apenas com sim ou sair, considerando a acentuação na hora da escrita`);
				    while(decisao !== 'sim' && decisao !== 'sair') {
				 	alert('Favor, escolher uma das opções apresentadas, considerando a acentuação na hora da escrita');
				 	decisao=prompt(`${nome}, deseja fazer mais algum outro cálculo? Responda apenas com sim ou sair, considerando a acentuação na hora da escrita`);
				 	
				 }
				 	if(decisao==='sair'){
				 		operacao='sair';
				 		

				 	} else{
				 		operacao='sair';
				 		decisao='sim';
				 	}
			}


		}
		alert("Até a próxima");
		break;
	


	 case 2:

			let nomePessoa=undefined;
			while(null === nomePessoa || nomePessoa===undefined  || nomePessoa===''){
				nomePessoa= prompt('Bora organizar a sua lista de compras? Me diga, qual é o seu nome?');
			}
			var escolha = parseInt(prompt(`${nomePessoa}, você deseja adicionar itens na sua lista de compras? Responda 1 para SIM ou 2 para NÃO`));

			while(isNaN(escolha) || escolha<=0 || escolha>2) {
				alert('Favor, inserir apenas um dos números mencionados');
				escolha = parseInt(prompt(`${nomePessoa}, você deseja adicionar itens na sua lista de compras? Responda 1 para SIM ou 2 para NÃO`));		
			}

			if(escolha === 1) {
				let item;
				const legumes=[];
				const frutas=[];
				const doces=[];
				const laticinios=[];
				const outros=[];
				const listaGeral=[];

				while(escolha === 1 || escolha === undefined ) {
				item=(prompt('Insira o nome do item que você quer adicionar')); 
				while(null === item || item===undefined  || item===''){
					item=(prompt('Insira o nome do item que você quer adicionar'));
				}


				let categoria= prompt('Esse item faz parte de qual dessas categorias: legumes, frutas, doces , laticinios ou outros ? Insira o nome da categoria igual a descrição');
				while(categoria !== 'legumes' && categoria !== 'frutas' && categoria !== 'doces' && categoria !== 'laticinios' && categoria !== 'outros'  ) {
					alert('Por gentileza, insira corretamente alguma das categorias pré estabelecidas');
					categoria= prompt('Esse item faz parte de qual dessas categorias: legumes, frutas, doces , laticinios ou outros ? Insira o nome da categoria igual a descrição');
				}

				if(categoria === 'legumes'){
					legumes.push(item);
					
				}
				if(categoria === 'frutas'){
					frutas.push(item);
				
				}
				if(categoria === 'doces'){
					doces.push(item);
					
				}
				if(categoria === 'laticinios'){
					laticinios.push(item);
					
				}
				if(categoria === 'outros'){
					outros.push(item);
					
				}
				listaGeral.push(item);
				escolha= parseInt(prompt('Deseja inserir ou remover algum item da lista? Responda 1 para INSERIR , 2 para REMOVER ou 3 para SAIR'));

				while(isNaN(escolha) || escolha<=0 || escolha>3) {
				alert('Favor, inserir apenas um dos números mencionados');
				escolha= parseInt(prompt('Deseja inserir ou remover algum item da lista? Responda 1 para INSERIR , 2 para REMOVER ou 3 para SAIR'));		
				}


				while(escolha === 2) {
				   let itemRemovido= prompt(`Insira o nome do item que deseja remover. A sua lista geral tem os seguintes itens: \n \n => ${listaGeral}`);
				   while(listaGeral.indexOf(itemRemovido) === -1) {
				   	alert('Não foi possível encontrar o item dentro da lista! Insira o nome corretamente');
				   	itemRemovido= prompt(`Insira o nome do item que deseja remover. A sua lista geral tem os seguintes itens: \n \n => ${listaGeral}`);
				   }


					 if(legumes.includes(itemRemovido) === true) {
					 		legumes.splice(legumes.indexOf(itemRemovido),1);
					 } 

					 if(frutas.includes(itemRemovido) === true) {
					 		frutas.splice(frutas.indexOf(itemRemovido),1);
					 }

					 if(doces.includes(itemRemovido) === true) {
					 		doces.splice(doces.indexOf(itemRemovido),1);
					 }

					 if(laticinios.includes(itemRemovido) === true) {
					 		laticinios.splice(laticinios.indexOf(itemRemovido),1);
					 }

					 if(outros.includes(itemRemovido) === true) {
					 		outros.splice(outros.indexOf(itemRemovido),1);
					 } 
				

				  	listaGeral.splice(listaGeral.indexOf(itemRemovido),1);

				  alert(`O item ${itemRemovido.toUpperCase()} foi removido com sucesso!! \n A sua lista ficou atualizada com os seguintes itens: \n \n => ${listaGeral}`);
				  escolha= parseInt(prompt('Deseja inserir ou remover algum item da lista? Responda 1 para INSERIR , 2 para REMOVER ou 3 para SAIR'));
				}



				if(escolha === 3) {
					alert(`${nomePessoa}, a sua lista final com todos os itens inseridos são: ${listaGeral}`);
					alert(`Aqui está o conjunto dos itens em suas respectivas categorias: \n 
					Legumes:${legumes} \n
					Frutas:${frutas} \n
					Doces:${doces} \n
					Laticinios:${laticinios} \n 
					Outros:${outros} \n`);
					alert('Obrigado por participar');

				}



				}

			}

			else{

				alert(`Tudo bem então ${nomePessoa}. Agradecemos a sua participação e volte sempre que quiser`);

			}
	 		 break;

	


	 case 3:
	 	
			let numeroAleatorio=Math.round(Math.random()*10);

			for(let chances=1; chances<4; chances++) {
				let palpite=parseInt(prompt('Insira algum número entre 0 a 10 e tente acertar!'));
					while(isNaN(palpite) || palpite>10 || palpite <0) {
						palpite=parseInt(prompt('Favor, insira apenas números entre 0 a 10 e tente acertar!'));
					}

					if(palpite === numeroAleatorio){
						alert(`Você acertou, parabéns!! O número que eu pensei foi o ${numeroAleatorio}`);
						break;
					} else if(chances === 3) {
						alert(`Você errou!! O número que eu pensei foi o ${numeroAleatorio} e você colocou o número ${palpite}. As suas tentativas acabaram. Tente novamente`);
						break;
					}
					alert(`Você errou!! o número que eu pensei foi o ${numeroAleatorio} e você colocou o número ${palpite}. Você possui mais ${3-chances} tentativas`);
					numeroAleatorio=Math.round(Math.random()*10);
				
			} 
	 break;



	 case 4:
	 	const nomeUsuario= prompt('Qual é o seu nome?');
		let numeroArea= parseInt(prompt(`Olá ${nomeUsuario}, você quer seguir para o Front-end ou o Back-end? Digite 1 para o Front-end ou 2 para o Back-end`));

		while(isNaN(numeroArea) || numeroArea<=0 || numeroArea>2 ) {
			alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
			numeroArea= parseInt(prompt(`Olá ${nomeUsuario}, você quer seguir para o Front-end ou o Back-end? Digite 1 para o front ou 2 para o back`));
		}





		if(numeroArea === 1) {
			const area='Front-end';
			let item = prompt(`${nomeUsuario}, em ${area}, você quer aprender React ou Vue? `);
			while(item !== 'React' && item !== 'Vue'){
				alert('Favor inserir React ou Vue, considerando a letra maiúscula');
				item = prompt(`${nomeUsuario}, em ${area}, você quer aprender React ou Vue? `);
			}

		    let escolha= parseInt(prompt(`Você deseja se especializar no ${area} ou deseja ir para Full-stack?. Digite 1 para ${area} ou 2 para Full-stack`));


		    while(isNaN(escolha) || escolha<=0 || escolha>2 ) {
			alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
			escolha= parseInt(prompt(`Você deseja se especializar no ${area} ou deseja ir para Full-stack?. Digite 1 para ${area} ou 2 para Full-stack`));
			} if(escolha ===1) {escolha = 'Front-end'} else {escolha = 'Full-stack'};


			
			let outrosAprendizados= parseInt(prompt(`Já que você escolheu se especializar em ${escolha}, tem mais alguma tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO`));

			while(isNaN(outrosAprendizados) || outrosAprendizados<=0 || outrosAprendizados>2 ) {
			alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
			outrosAprendizados= parseInt(prompt(`Já que você escolheu se especializar em ${escolha}, tem mais alguma tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO`));}

			
			if(outrosAprendizados === 1) {
				const tecnologias=[];
				
				while(outrosAprendizados === 1) {
					tecnologias.push(prompt('Qual o nome dessa tecnologia?')); 
					outrosAprendizados = parseInt(prompt('Tem mais alguma outra tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO'));
					while(isNaN(outrosAprendizados) || outrosAprendizados<=0 || outrosAprendizados>2 ) {
						alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
						outrosAprendizados = parseInt(prompt('Tem mais alguma outra tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO'));
					}
				}
				
				alert(`Sobre essas tecnologias ${tecnologias}, elas estão muito em alta no mercado. Aproveite para se dedicar ao máximo em estudar sobre elas`);
			}
			
			alert(`${nomeUsuario}, estamos felizes por responder a este questionário. Obrigado e muito sucesso na sua carreira`);
		
		} 

		else 
			if(numeroArea === 2){
			const area='Back-end';	
			let item = prompt(`${nomeUsuario}, em ${area}, você quer aprender C# ou Java? `);

			while(item !== 'C#' && item !== 'Java'){
				alert('Favor inserir C# ou Java, considerando a letra maiúscula e os caracteres adicionais');
				item = prompt(`${nomeUsuario}, em ${area}, você quer aprender C# ou Java? `);
			}


			let escolha= parseInt(prompt(`Você deseja se especializar no ${area} ou deseja ir para Full-stack?. Digite 1 para ${area} ou 2 para Full-stack`));


		    while(isNaN(escolha) || escolha<=0 || escolha>2 ) {
			alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
			escolha= parseInt(prompt(`Você deseja se especializar no ${area} ou deseja ir para Full-stack?. Digite 1 para front ou 2 para Full-stack`));
			} if(escolha ===1) {escolha = 'Back-end'} else {escolha = 'Full-stack'};


			
			let outrosAprendizados= parseInt(prompt(`Já que você escolheu se especializar em ${escolha}, tem mais alguma tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO`));

			while(isNaN(outrosAprendizados) || outrosAprendizados<=0 || outrosAprendizados>2 ) {
			alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
			outrosAprendizados= parseInt(prompt(`Já que você escolheu se especializar em ${escolha}, tem mais alguma tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO`));}

			
			if(outrosAprendizados === 1) {
				const tecnologias=[];
				
				while(outrosAprendizados === 1) {
					tecnologias.push(prompt('Qual o nome dessa tecnologia?'));
					outrosAprendizados = parseInt(prompt('Tem mais alguma outra tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO'));
					while(isNaN(outrosAprendizados) || outrosAprendizados<=0 || outrosAprendizados>2 ) {
						alert(`${nomeUsuario}, por gentileza, insira apenas um dos números mencionados`);
						outrosAprendizados = parseInt(prompt('Tem mais alguma outra tecnologia que queira aprender? Digite 1 para SIM ou 2 para NAO'));
					}
				}
				
				alert(`Sobre essas tecnologias ${tecnologias}, elas estão muito em alta no mercado. Aproveite para se dedicar ao máximo em estudar sobre elas`);
			}
			
			alert(`${nomeUsuario}, estamos felizes por responder a este questionário. Obrigado e muito sucesso na sua carreira`);

		} 
	 break;

	case 5:
	alert('Tudo bem então. Quando quiser é só voltar novamente :D');
	break;
}
