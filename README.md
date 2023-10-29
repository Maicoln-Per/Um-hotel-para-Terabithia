<a href="https://um-hotel-para-terabithia.vercel.app/"><h1>Um Hotel para Terabithia</h1></a>

<p>
Este projeto foi proposto nas aulas do Instituto PROA pelo meu professor Gabriel Augusto Azevedo com o objetivo de treinar lógica de programação. Durante esse, exploraremos diversas tarefas relacionadas a um fictício "Hotel Terabithia". A ênfase deste desafio vai além do código, ele foca na capacidade de análise de problemas e na construção de soluções eficazes.
</p>

<p>
Ao longo deste desafio, desenvolvi programas para os funcionários do Hotel Terabithia, abrangendo tarefas que incluem cálculos de custos, registro de hóspedes, organização de eventos e muito mais. O JavaScript foi a ferramenta principal que utilizei para criar essas soluções.
</p>

<h2>Para utilizar o sistema do Hotel</h2>
<p>1º opção: Baixar o arquivo zip deste repositório e acessar o arquivo index na mesma pasta.</p>
<p>2º opção: Acessar o site no ar através do link que está no canto superior direito do repositório do Github.</p>
<h2>Neste hotel se encontram diversas opções de escolha sendo elas:</h2>

<ol>
    <li><strong>Quantos quartos são? </strong>Desenvolver um programa que lida com reservas de quartos, calculando custos e registrando hóspedes.</li>
    <li><strong>Como soletra? </strong>Cadastrar hóspedes com diferentes idades e calcular os custos da hospedagem, considerando gratuidades e descontos.</li>
    <li><strong>Com "S" ou com "Z"? </strong>Criar um programa para cadastrar e pesquisar hóspedes no hotel.</li>
    <li><strong>Festa ou trabalho? </strong>Calcular o custo total de contratar garçons para eventos.</li>
    <li><strong>Hora de comer. </strong>Calcular custos de café, água e salgados para eventos.</li>
    <li><strong>Auditório para quantos? </strong>Sugerir o auditório mais adequado para eventos com base na capacidade disponível.</li>
    <li><strong>Que horas você pode?</strong> Verificar a disponibilidade do restaurante do hotel com base no dia da semana e na hora do evento.</li>
    <li><strong>Álcool ou gasolina? </strong>Calcular qual tipo de combustível é mais vantajoso com base nos preços de álcool e gasolina.
    </li>
    <li><strong>Ar puro, finalmente. </strong>Calcular o custo da manutenção de ar-condicionados, considerando descontos para quantidades mínimas.</li>
</ol>
<h2>Para acessar...</h2>
<p>Ao acessar o sistema, o sistema irá perguntar o nome do seu Hotel com a mensagem: "O nome do hotel é ... (Nome do hotel que você digitou)"</p>
<p>Em seguida, o sistema irá perguntar seu nome. A partir daí, você estará vendo a entrada do Hotel com um botão clicável embaixo.</p>
<img src="../Hotel/imagens/entrada-hotel.png">
<p>Ao clicar no botão, o sistema irá pedir uma senha, essa senha foi definida por padrão no exercício, e para acessar as funcionalidades, você deverá informa-lá. Qualquer coisa diferente dessa senha não deixará você acessar as funcionalidades.</p>
<h2>A senha para acessar o Hotel é: <i><strong>2678</strong></i></h2>
<img src="../Hotel/imagens/senha-hotel.png">
<hr>
<h1>Código em partes:</h1>
<h3>1) Quantos quartos são?</h3> 
<p>Desenvolva um programa que:</p>
<ul>
    <li>
        <p>Receba o valor de uma diária no hotel e a quantidade de dias de hospedagem.</p>
    </li>
    <li>
        <p>Valide as informações para impedir dados inválidos.</p>
    </li>
    <li>
        <p>Pergunte o nome do hóspede.</p>
    </li>
    <li>
        <p>Pergunte se o usuário confirma a reserva.</p>
    </li>
    <li>
        <p>Exiba mensagens de acordo com as ações do usuário.</p>
    </li>
</ul>

<p>Exemplo:</p>

<p>Programa pergunta   => "Qual o valor padrão da diária?"
<p>Resposta do usuário => -12
Programa exibe         => "Valor inválido, {Nome}"</p>
<p>Programa pergunta   => "Qual o valor padrão da diária?"
Resposta do usuário => 55.0</p>
<p>Programa pergunta   => "Quantas diárias serão necessárias?"
Resposta do usuário => 10</p><p>
Programa exibe         => "O valor de 10 dias de hospedagem é de R$550.0"</p><p>Programa pergunta   => "Qual o nome do hóspede?"
Resposta do usuário => Carlos Moreira</p>

<p>Programa pergunta   => "{Nome}, você confirma a hospedagem para Carlos Moreira por 10 dias? S/N"
Resposta do usuário => S</p>
<p>
Programa exibe         => "{Nome}, reserva efetuada para Carlos Moreira. O valor total é de 550.0."</p>

 <h3>2) Como soletra?</h3>
   <p>Neste programa, iremos cadastrar hóspedes com idades variadas e calcular o custo da hospedagem, considerando gratuidades e descontos para idosos.</p>
    <p>Exemplo:</p>
    <p>Programa pergunta => "Qual o valor padrão da diária?"</p>
    <p>Resposta do usuário => 100</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => Rosani Albuquerque</p>
    <p>Programa exibe => "Rosani Albuquerque cadastrada(o) com sucesso."</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => Jailson Albuquerque</p>
    <p>Programa pergunta => "Qual a idade do Hóspede?"</p>
    <p>Resposta do usuário => 6</p>
    <p>Programa exibe => "Jailson Albuquerque cadastrada(o) com sucesso. Jailson possui gratuidade"</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => Gabriel Albuquerque</p>
    <p>Programa pergunta => "Qual a idade do Hóspede?"</p>
    <p>Resposta do usuário => 19</p>
    <p>Programa exibe => "Gabriel Albuquerque cadastrada(o) com sucesso."</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => Wesley Albuquerque</p>
    <p>Programa pergunta => "Qual a idade do Hóspede?"</p>
    <p>Resposta do usuário => 82</p>
    <p>Programa exibe => "Wesley Albuquerque cadastrada(o) com sucesso. Wesley paga meia"</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => PARE</p>
    <p>Programa exibe => "{Nome}, o valor total das hospedagens é: R$250; 1 gratuidade(s); 1 meia(s)"</p>

<h2>3) Com "S" ou com "Z"?</h2>
    <p>Crie um programa para cadastrar e pesquisar hóspedes em um hotel. O programa deve oferecer opções para cadastrar, pesquisar, listar e sair.</p>
    <p>Exemplo:</p>
    <p>Programa pergunta => "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"</p>
    <p>Resposta do usuário => 1</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => Rosani Albuquerque</p>
    <p>Programa exibe => "Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!"</p>
    <p>Programa pergunta => "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"</p>
    <p>Resposta do usuário => 2</p>
    <p>Programa pergunta => "Qual o nome do Hóspede?"</p>
    <p>Resposta do usuário => Rosani Albuquerque</p>
    <p>Programa exibe => "Hóspede Rosani Albuquerque foi encontrada(o)!"</p>
    <p>Programa pergunta => "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"</p>

<h2>4) Festa ou Trabalho?</h2>
	<p>Crie um programa para calcular o custo total de contratar garçons para um evento.</p>
    <p>Exemplo:</p>
	<p>Programa pergunta => "Qual a duração do evento em horas?"</p>
	<p>Resposta do usuário => 8</p>
	<p>Programa pergunta => "Quantos garçons serão necessários?"</p>
	<p>Resposta do usuário => 4</p>
	<p>Programa exibe => "Custo total: R$ 336.0"</p>
	<p>Programa pergunta => "Gostaria de efetuar a reserva? S/N"</p>
	<p>Resposta do usuário => S</p>
	<p>Programa exibe => "{Nome}, reserva efetuada com sucesso."</p>

<h2>5) Hora de comer:</h2>

Desenvolva um programa para calcular os custos de café, água e salgados para um evento em um hotel.

Exemplo:

<p>Programa pergunta => "Qual o número de convidados para o evento?"
Resposta do usuário => 360</p>

<p>Programa exibe => "Quantidade de convidados superior à capacidade máxima."</p>

<p>Programa pergunta => "Qual o número de convidados para o evento?"
Resposta do usuário => 100</p>

<p>Programa exibe => "O evento precisará de 20 litros de café, 50 litros de água, 700 salgados. O custo total do evento será de R$ 274,00"</p>

<p>Programa pergunta => "Gostaria de efetuar a reserva? S/N"
Resposta do usuário => S</p>

<p>Programa exibe => "{Nome}, reserva efetuada com sucesso."</p>

<h2>6) Auditório para quantos?</h2>

Desenvolva um programa para sugerir o auditório mais adequado para um evento, considerando a capacidade de dois auditórios disponíveis.

Exemplo:

<p>Programa pergunta => "Qual o número de convidados para o seu evento?"
Resposta do usuário => 360</p>

<p>Programa exibe => "Quantidade de convidados superior à capacidade máxima."</p>

<p>Programa pergunta => "Qual o número de convidados para o seu evento?"
Resposta do usuário => 192</p>

<p>Programa exibe => "Use o auditório Laranja (inclua mais 42 cadeiras)"</p>

<p>Programa pergunta => "Gostaria de efetuar a reserva? S/N"
Resposta do usuário => N</p>

<p>Programa exibe => "{Nome}, reserva não efetuada."</p>

<h2>7) Que horas você pode?:</h2>

Crie um programa para verificar a disponibilidade do restaurante do hotel com base no dia da semana e na hora do evento.

Exemplo:

<p>Programa pergunta => "Qual o dia do evento?"</p>
<p>Resposta do usuário => sabado</p>

<p>Programa pergunta => "Qual a hora do evento?"</p>
<p>Resposta do usuário => 16</p>

<p>Programa exibe => "Restaurante indisponível"</p>

<p>Programa pergunta => "Qual o dia do evento?"</p>
<p>Resposta do usuário => segunda</p>

<p>Programa pergunta => "Qual a hora do evento?"</p>
<p>Resposta do usuário => 13</p>

<p>Programa pergunta => "Qual o nome da empresa?"</p>
<p>Resposta do usuário => Lojas Transilvânia</p>

<p>Programa exibe => "Restaurante reservado para Lojas Transilvânia: segunda às 13hs."</p>

<h2>8) Álcool ou gasolina?</h2>

Crie um programa para calcular qual tipo de combustível é mais vantajoso com base nos preços de álcool e gasolina.

Exemplo:

<p>Programa pergunta => "Qual o valor do álcool no posto Wayne Oil?"</p>
<p>Resposta do usuário => 4.20</p>

<p>Programa pergunta => "Qual o valor da gasolina no posto Wayne Oil?"</p>
<p>Resposta do usuário => 5.82</p>

<p>Programa pergunta => "Qual o valor do álcool no posto Stark Petrol?"</p>
<p>Resposta do usuário => 4.35</p>

<p>Programa pergunta => "Qual o valor da gasolina no posto Stark Petrol?"</p>
<p>Resposta do usuário => 6.17</p>

<p>Programa exibe => "{Nome}, é mais barato abastecer com gasolina no posto Wayne Oil."</p>

<h2>9) Ar puro, finalmente:</h2>

Crie um programa que calcule o custo da manutenção de ar-condicionados, considerando descontos para quantidade mínima de aparelhos a serem mantidos.

Exemplo:

<p>Programa pergunta => "Qual o nome da empresa?"</p>
<p>Resposta do usuário => Empresa 1</p>

<p>Programa pergunta => "Qual o valor por aparelho?"</p>
<p>Resposta do usuário => 100</p>

<p>Programa pergunta => "Qual a quantidade de aparelhos?"</p>
<p>Resposta do usuário => 7</p>

<p>Programa pergunta => "Qual a porcentagem de desconto?"</p>
<p>Resposta do usuário => 12</p>

<p>Programa pergunta => "Qual o número mínimo de aparelhos para conseguir o desconto?"</p>
<p>Resposta do usuário => 3</p>

<p>Programa exibe => "O serviço de Empresa 1 custará R$ 1350.0"</p>

<p>Programa pergunta => "Deseja informar novos dados, {Nome}? (S/N)"</p>
<p>Resposta do usuário => S</p>

<p>Programa pergunta => "Qual o nome da empresa?"</p>
<p>Resposta do usuário => Empresa 2</p>

<p>Programa pergunta => "Qual o valor por aparelho?"</p>
<p>Resposta do usuário => 95</p>

<p>Programa pergunta => "Qual a quantidade de aparelhos?"</p>
<p>Resposta do usuário => 6</p>

<p>Programa pergunta => "Qual a porcentagem de desconto?"</p>
<p>Resposta do usuário => 9</p>

<p>Programa pergunta => "Qual o número mínimo de aparelhos para conseguir o desconto?"</p>
<p>Resposta do usuário => 10</p>

<p>Programa exibe => "O serviço de Empresa 2 custará R$ 1480.0"</p>

<p>Programa pergunta => "Deseja informar novos dados, {Nome}? (S/N)"</p>
<p>Resposta do usuário => N</p>

<p>Programa exibe => "O orçamento de menor valor é o [Empresa 1 por R$ 1200.0]"</p>

