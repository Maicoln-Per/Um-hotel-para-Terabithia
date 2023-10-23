let nomeHotel = prompt("Digite o nome do hotel: ");
alert(`O nome do hotel é ${nomeHotel}`);
let nomeUsuario = prompt("Qual o seu nome?");

let hospedes = [];

function senha() {
    const senha = '2678';
    let senhaUsuario = prompt("Digite a senha para acessar o hotel");
    if (senhaUsuario != senha) {
        alert('Senha incorreta!');
    } else {
        inicio();
    }
}

function inicio() {

alert(`Bem vindo ${nomeUsuario}. É com imensa alegria que recebemos você no ${nomeHotel}. Estamos verdadeiramente honrados por você ter escolhido o nosso hotel como seu refúgio durante sua estadia na cidade. Seja bem-vindo a um mundo de conforto, elegância e hospitalidade excepcional. `);

let opcao = Number.parseInt(prompt(`Selecione um serviço do hotel:\n
    1 ) Reserva de Quartos\n
    2 ) Cadastro de Hóspedes\n
    3 ) Abastecimento de Carros\n
    4 ) Buffet\n
    5 ) Auditório\n
    6 ) Reserva de restaurante\n
    7 ) Ar Condicionado\n
    8 ) Sair
    `));

    switch(opcao) {
    case 1:
        reservaQuartos();
        break;
    case 2:
        cadastroHospedes();
        break;
    case 3:
        abastecerCarro();
        break;
    case 4:
        horaDeComer();
        break;
    case 5:
        verificarAuditorio();
        break;
    case 6:
        reservaRestaurante();
        break;
    case 7:
        arCondicionado();
        break;
    case 8:
        alert(`Obrigado ${nomeUsuario}, volte sempre para o ${nomeHotel}`)
        sair();
        break;
    default:
        erro();
        break;
     }
}


function reservaQuartos() {
    let valorDiaria = Number.parseFloat(prompt('Qual o valor da diária?'));
    let quantidadeDeDias = Number.parseInt(prompt('Quantas diárias serão necessárias?'));
    let total = valorDiaria * quantidadeDeDias;
    alert(`O valor de ${quantidadeDeDias} dias é de ${total} R$.`);
    if(isNaN(valorDiaria) || valorDiaria <= 0 || isNaN(quantidadeDeDias) || quantidadeDeDias <= 0 || quantidadeDeDias > 30) {
        alert(`Valor inválido, ${nomeUsuario}`);
        inicio();
    } else {
        let nomeHospede = prompt('Qual o nome do hospede?');
        let respostaUsuario = prompt(`${nomeUsuario}, você confirma a hospedagem para ${nomeHospede} por ${quantidadeDeDias} dias? S/N`);
        if (respostaUsuario === "S" || respostaUsuario === "s" || respostaUsuario === "Sim" || respostaUsuario === "SIM") {
            alert(`${nomeUsuario}, reserva efetuada para ${nomeHospede}. O valor total é de ${total}R$`);
        } else {
            alert(`${nomeUsuario}, reserva não efetuada`);
        }
        inicio();
    }
}

function cadastroHospedes() {
    let totalValorHospedagem = 0;
    let gratuidades = 0;
    let meias = 0;

    let opcao = Number.parseInt(prompt(`Selecione uma opção \n 1 ) Cadastrar Hóspedes\n 2 ) Pesquisar Hóspedes\n 3 ) Listar Hóspedes\n 4 ) Sair `));
    if (opcao === 1) {
        let valordia = parseFloat(prompt("Qual o valor padrão da diária?"));

    while (hospedes.length < 15) {
        const nomeHospede = prompt("Qual o nome do Hóspede? (Digite 'PARE' para encerrar)");
        if (nomeHospede.toUpperCase() === "PARE") {
            break; // Encerra o loop se o usuário digitar 'PARE'
        }
        const idadeHospede = parseInt(prompt("Qual a idade do Hóspede?"));
        if (isNaN(idadeHospede)) {
            alert(`Idade inválida para ${nomeHospede}`);
        } else if (idadeHospede <= 6) {
            alert(`${nomeHospede} cadastrada(o) com sucesso!\n${nomeHospede} possui gratuidade.`);
            gratuidades++;
        } else if (idadeHospede >= 60) {
            alert(`${nomeHospede} cadastrada(o) com sucesso!\n${nomeHospede} paga meia.`);
            meias++;
            totalValorHospedagem += valordia / 2;
        } else {
            alert(`${nomeHospede} cadastrada(o) com sucesso!`);
            totalValorHospedagem += valordia;
        }
        hospedes.push({ nome: nomeHospede, idade: idadeHospede });
    }
        alert(`${nomeUsuario}, o valor total das hospedagens é: R$${totalValorHospedagem}.\n ${gratuidades} gratuidade(s).\n ${meias} meia(s).`);
        return cadastroHospedes();
    } else if (opcao === 2) {
        const nomePesquisa = prompt("Qual o nome do Hóspede?");
        const hospedeEncontrado = hospedes.find(hospede => hospede.nome === nomePesquisa);
        if (hospedeEncontrado) {
            alert(`Hóspede ${nomePesquisa} foi encontrado(a)!`);
        } else {
            alert(`Hóspede ${nomePesquisa} não foi encontrado(a)!`);
        }
        return cadastroHospedes();
    } else if (opcao === 3) {
        if (hospedes.length === 0) {
            alert("Não há hóspedes cadastrados.");
        } else {
            let lista = "Lista de Hóspedes:\n";
            hospedes.forEach(hospede => {
                lista += `${hospede.nome}\n`;
            });
            alert(lista);
        }
        return cadastroHospedes();
    } else if (opcao == 4){
        alert(`Obrigado ${nomeUsuario}, volte sempre!`);
        return inicio();
    } else {
        alert('Insira uma opção válida!');
        return cadastroHospedes();
    }
}