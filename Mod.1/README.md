# Javascript:Programando na linguagem da Web

**Olá Mundo com Javascript**

Iniciamos esse curso falando em como vamos aplicar as funções Javascript no nosso código,para que nosso código não seja exibido como texto,precisamos aplicar no código `html` a tag `script ` e dentro dela escrever o código que queremos.

```html
 
 <script>
     console.log ("Olá Mundo")
 </script>
```

Usamos `alert` e `console.log` para imprimirmos os valores que colocamos entre parênteses.  


**Query Selector**

Depois de conhecer funções mais básicas do JavaScript,vamos ir mais a fundo e aprender a manipular a página ou seja o Html,trazendo o dinâmismo a página.

Por exemplo se eu quero mudar meu titúlo `h1`,com certeza vamos usar o JavaScript para isso precisamos ter acesso ao `Html` sabemos que dentro da tag `script` temos o `javascript` e fora o `html` da página.

Para termos acesso ao Html ,primeiro precisamos conhecer o `DOM`,o `DOM` é a reresentação do seu `HTML` no `Javascript` e para termos acesso a ele ,podemos ir no console do nosso navegador e escrever lá `document` e ele vai nos responder com todo o html da página.

Porém queremos alterar coisas especificas,por exemplo nosso `<h1>`,para pesquisarmos o `h1` na `DOM` usamos uma função chamada `querySelector` dentro dessa função podemos passar como parâmetro quem nos queremos buscar.

```Javascript

document.querySelector("h1");

```

Assim a querySelector nos tras o `h1` que pedimos entre parenteses,porém temos que nos atentar a algumas coisas por exemplo se executarmos o nosso código que está dentro do `script` antes do `h1` ser declarado, seu valor será `null` por que ?porque quando o navegador carrega ele começa lendo de cima para baixo ,então é uma boa prática colocarmos a tag `<script>` no final do `body`para que o `querySelector` encontre o que precisarmos.

E agora vamos selecionar e modificar as tags,para isso ao invés de imprimir o `<h1>` vamos salvar a parte selecionada que queremos manipular dentro de uma variavel e através disso vamos alterar o texto dentro do `<h1>` e como teremos  o acesso a esse texto como pegamos ele? para isso usamos a tag `textContent`.

* Um exemplo rápido :

```JavaScript
var título = document.querySelector("h1")
console.log(titulo);
console.log(titulo.textContent);
```

* O que será impresso desse código é isso:

```JavaScript

<h1>Aparecida Nutrição</h1>

Aparecida Nutrição

```

Agora fica mais claro o que o `textContent` pode fazer.

Para mudarmos o texto que temos no `<h1>` precisamos declarar a variavel `titulo` junto da função `.textContent`  e passar um novo valor a ela.

```JavaScript

var titulo = document.querySelector("h1");

titulo.textContent ="Aparecida Nutricionista";
```

**Boas Práticas**

* A primeira boa prática que temos que nos atentar ,é ao invés de usar dentro da `querySelector` ou outra função uma tag como `<h1>` pois se estamos trabalhando com um ou mais devs ,pode haver mudança de tag de `h1` para `h2` e toda manipulação de conteúdo ir por agua abaixo,sabendo disso vamos utilizar a class especificando o conteudo que a tag estiver carregando.

* A segunda boa prática é não deixar nosso código em javaScript no documento html,e sim criar uma pasta externa só para o javaScript e aplicar o código lá.
 
 No nosso  documento html precisamos referenciar o documento externo de  javaScript.

 ```JavaScript

        </section>
    </main>
<script src="js/principal.js"></script>

</body>
```

Quando recarregarmos a página, o arquivo continuará funcionando corretamente.

**Buscando Dados do Paciente**

Agora vamos iniciar o calculo do "imc" de cada paciente e fazer com que o JavaScript calcule para nós, ao invés de alterar os dados na mão.

Para isso temos que saber como se faz o cálculo de imc de uma pessoa, através de pesquisas sabemos que um calculo de IMC é a `massa divido por altura * altura` ,então vamos tomar isso como uma base para nossa página.

Indo no nosso html podemos ver os dados de cada paciente,todos com `class` e é esses dados que vamos acessar e como vamos acessar ?

* Iniciamos fazendo uma `var` paciente e ela vai receber como valor `document.querySelector("#primeiro-paciente")` através do "document" temos acesso a todo `DOM` da nossa página e usamos o `querySelector`para manipular algum dado ou tag que esteja lá,e dentro dos parenteses referenciarmos o que vamos manipular,no caso vamos manipular o elemento que tem como `id=primeiro-paciente` (declaramos um id dentro da class paciente) ou seja tudo o que tinha no #primeiro-paciente passou para a var `paciente` .

```JavaScript
var paciente = document.querySelector("#primeiro-paciente");
```

* Logo após vamos criar uma `var tdPeso`(**Porque tdPeso? porque no html o nome,peso e altura são td da tabela**) que vai receber `paciente.querySelector(".info-peso")` através disso vamos usar o `querySelector` para procurar a class `.info-peso` dentro da variavel `paciente`.

Depois disso vamos criar uma `var peso` que irá receber a class `tdPeso`junto com `.textContent` ou seja através do `.textContent` vamos extrair somente o texto da class `tdPeso`,então se fizermos um `console.log(peso)` vamos nos deparar com o valor `100`.

```JavaScript
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
```
* Agora precisamos captar o dado de altura da var paciente,para isso vamos fazer a mesma coisa que fizemos com o `peso` criamos uma var `tdAltura` que irá receber o `querySelector(".tdAltura")` usamos o querySelector para buscarmos la na `DOM`o conteúdo  da classe `(".tdAltura")` e passar ele  para a `var tdAltura`.

* Agora vamos pegar somente o conteudo da variavel `tdAltura` e passar para  a variavel `altura` que acabamos de criar usando o `textContent`.

```JavaScript
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
```

E agora vamos criar uma `var imc` para calcular o indice de massa corporal de cada paciente e colocar nossa variaveis peso e altura dentro da fórmula.

```JavaScript
var imc = peso/ altura * altura;
```
**Calculando e exibindo o IMC corretamente**

Na ultima aula ,podemos ver que nossa conta de imc não muito deu certo ,pois o navegador lê o código da esquerda para direita então ele dividiu  `peso` pela `altura` e depois multiplicou pela `altura` novamente nos dando o resultado de `100`.

Para que o navegador faça a conta de maneira certa,precisamos priorizar uma parte da conta ,assim vamos colocar os parenteses na parte final da conta priorizando a multiplicação.

```JavaScript
var imc = peso/ (altura * altura);
```
Logo após arrumarmos nossa conta ,se atualizarmos nossa página nada muda pois precisamos pegar o valor da `var imc` e aplicar na class `info-imc` que está no `tr` com `class paciente`.

Para isso vamos criar uma `class tdImc` como nos outros ,a var tdImc vai receber o valor de  `paciente.querySelector(".info-imc");` ou seja fomos até a `class paciente` e selecionamos o elemento que queremos manipular `info-imc` logo após isso vai vir nossa conta com valor da `variavel imc` até aqui temos os dois valores das variaveis `tdImc` e `imc` para alterar esse valor diretamente la na nossa página vamos fazer o que fizemos no inicio do nosso código para alterar o titulo.

* Vamos declarar a `var` `tdImc` junto do `textContent`recebendo o valor de `imc` ou seja pegamos o conteúdo de `tdImc` através do `textContent` e fizemos ele receber o valor de `imc` ,alterando assim o valor de imc da nossa página para `25`.

**Operadores Lógicos**

Conseguimos calcular o IMC do paciente Paulo, mas o que acontece se alguém, no momento de digitar o código HTML, colocar um número negativo no campo de peso? Ou se incluir um número absurdo, como 10 mil quilos? Ou, sem querer, adicionar uma altura de 200?

```JavaScript
IMC = 10000 / 2.00 x 2.00
IMC = 10000 / 4.00
IMC = 2500
```
Precisamos notificar esse usuário com alguma mensagem mas também bloquear alguns tipos de dados que vão entrar em nossa tabela ,um exemplo, no `td` de altura a entrada de um número como o de 3 metros deve ser bloqueado ou o numero de -3 pois são alturas que não existem logo o **IMC** vai além do normal.

Então para iniciarmos nossa validação,antes de calcularmos nosso **IMC** vamos aplicar um `if` na var `peso`,aplicaremos o `if` em seguida entre parenteses vamos colocar (peso < 0) (se o peso for menor que zero pois não existe pessoa que tenha o peso de -1 uma mensagem será impressa `peso inválido`).

```JavaScript

if(peso < 0){
    console.log("Peso inválido!")
}
  

```
Porém queremos imprimir essa mensagem também quando o peso for maior que o normal como exemplo uma tonelada,precisamos aplicar novamente o `if` .

```JavaScript

if(peso > 1000){
    console.log("Peso inválido!")
}
  

```
Mas se formos ter que colocar um if a cada tipo de condição vamos encher muito nosso código, para isso temos a condição lógica `ou` que nos possibilita aplicar as duas condições em um só `if` e representamos ele através de duas barras `||` entre uma condição e outra.

```JavaScript

if(peso < 0 ||peso >1000){
    console.log("Peso inválido!")
}
    

```

Temos a necessidade também de fazermos a verificação da altura dos nossos pacientes da mesma maneira que fizemos com o peso.

```JavaScript

if(altura < 0 || altura > 3){
    console.log("Altura inválida!")
}
```
Porém o nosso `imc` continua sendo calculado mesmo a altura ou o peso sendo inválido e não queremos isso queremos que nosso `imc` não seja calculado se isso acontecer,então vamos criar duas variáveis do tipo `boolean` `pesoEhValido` e `alturaEhValida` as duas recebendo o valor `true` .


```Javascript

var pesoEhValido = true;
var AlturaEhValida = true;


if(peso < 0 || peso >1000){
        console.log("Peso inválido!")
}

if(altura <0 || altura > 3){
    console.log("Altura inválida!!")
}
```

Mas vamos aplicar essas duas novas variaveis com o valor `false` dentro do escopo dos `if` de acordo com eles.

```Javascript

var pesoEhValido = true;
var alturaEhValida = true;


if(peso < 0 || peso >1000){
        console.log("Peso inválido!")
        pesoEhValido = false;
}

if(altura <0 || altura > 3){
    console.log("Altura inválida!!")
    alturaEhValida= false;
}

```
E podemos colocar o bloco de conta dentro de um `if` com a condição de que se o `pesoEhValido` e a `alturaEhValido` forem `true` a conta será feita o `&&` significa e.

```JavaScript

var pesoEhValido = true;
var alturaEhValida = true;


if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!!")
    alturaEhValida= false;
    tdImc.textContent= "altura inválida!";
}

if(pesoEhValido && alturaEhvalido){
var imc = peso/ (altura * altura);
tdImc.textContent=imc;    
}
```
>Alteramos os if para menor ou igual e maior ou igual de todos eles.

**Replicando a validação e o cálculo do IMC para todos os pacientes**


Continuando nossa interação com a tabela ,vamos repassar o cálculo para todos os outros pacientes da tabela ,para isso vamos utilizar um loop.

Quando usamos o `querySelector` conseguimos acessar somente um item da nossa tabela mesmo tendo diversos itens com a mesma classe ou `id`,por exemplo se escrevermos assim.

```JavaScript

var pacientes= document.querySelector(".paciente")

```
Ao abrirmos o console podemos ver que ele só nos traz um elemento  da `class paciente` ao invés de nos trazer todos que possuem a mesma classe,se estamos interessados em trazer vários elementos que possuem aquela classe temos que usar uma função que é prima da `querySelector` conhecida como `querySelectorAll`.

Essa função nos retorna um `array` de pacientes ou seja uma lista com todos os pacientes que possuem a classe `paciente`,por exemplo se escrevermos assim:

```JavaScript
var pacientes= document.querySelectorAll(".paciente")
console.log(pacientes)
```

Vamos ver que esse código nos trouxe um array denotado com os colchetes com todos os pacientes com a mesma classe, e se abrirmos o array ele vai nos mostrar cada paciente e a sequencia de números ao lado e o array possui a propriedade `length` para nos dizer que ele retornou 5 itens.

Agora que conseguimos selecionar e trazer para o javaScript todos os nossos pacientes que estavam na tabela, queremos que ao passar por cada paciente execute todo bloco de código para cálculo do `imc`,para isso vamos usar uma das possibilidades que é o `loop for`.

O `loop for` nada mais é que um loop que tem tres declarações dentro dos parenteses ,declaração da variavel inicial `var i=0;` até onde você quer que ela cresça  por exemplo `i < 5;` e o que queremos fazer ao final de cada interação por exemplo somar o valor de um `i++` se imprimirmos o valor de `i` no console vamos ver que ele vai imprimir 5 valores de `i`.

```Javascript

for(var i=0; i < 5;i++){
    console.log(i);
}
```
Dentro do `for` colocamos aonde se inicia o array variavel `i = 0` e ate aonde ela vai `i < 5` porem ao invés de colocarmos um número delimitando podemos colocar a função `length` que diz o tamanho do `array` ou seja até o tamanho da minha lista então vamos imprimir dentro do `for` **vamos imprimir o item que queremos dentro do array,selecionando o numero que queremos,no caso vamos colocar o `i` para que ele pegue cada paciente da lista.**

```JavaScript
var pacientes= document.querySelectorAll(".paciente")

for(var i =0;i < pacientes.length ; i++){
    console.log(pacientes[i])
}
```
Se estamos conseguindo percorrer o array de pacientes,tendo acesso aos pacientes `[i]` a cada paciente,agora nos resta pegar todo bloco de calculo de `imc` e aplicar dentro do for,Além disso, faremos um ajuste para não precisarmos alterar todo o código. Usaremos um pequeno "truque", criando a variável `paciente`, que será um atalho para `pacientes[i]`: 

```Javascript
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    /*paciente[i] acessa todos os pacientes da nossa tabela pegando
    os dados de .info-peso .info-altura etc.*/

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}
```
Ao olharmos para nossa tabela vemos que foi impresso vários ,numeros após a virgula e queremos somente dois ,existe uma propriedade chamada `.tofixed` ,e a colocamos aonde imprimimos nossos números na tabela,ou seja no nosso `imc`.

```Javascript

 if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.tofixed(2);
    }
```

E agora nossa vizualização está ok.

**Estilos com Javascript**

Depois de arrumarmos nossa tabela queremos deixar ainda mais visual nossos erros para isso vamos deixar nossa linha inteira em vermeho caso algum dado esteja incorreto usando esses formas.

* A primeira é alterarmos diretamente no código em cada `if` para que se a condição do `if`seja `false` mude a cor do texto,sabemos que a linha que queremos alterar vem do nosso `tr = paciente` vamos aplicar na `class paciente` a propriedade `style` e junto dela a propriedade `color = "red"` ou também podemos alterar o fundo da nossa tabela usando o `paciente.style.backgorundColor="red";` utilizando o CamelCase nas palavras duplas como `font-size` faremos isso nos dois `if` para peso e altura.

```JavaScript

 if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.style.backgroundColor="lightCoral";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.style.backgroundColor="lightCoral";
    }
```

* A segunda forma é utilizar um arquivo externo de Css, sabemos também que é uma boa prática estilizarmos de alguma forma nosso código, no arquivo CSS ligado a página vamos referênciar nossa classe,usando os seletores e vamos inserir o que queremos como estilo nessa classe.

```Css

.paciente-inválido{
    background-color :lightCoral;
}
```
E precisamos também editar diretamente no Javascript,vamos utilizar a propriedade das tags selecionadas que é a `classList`,ela nos da retorno de todas as classes daquele objeto e retorna também alguns métodos como por exemplo o método `add` que nos permite adicionar uma nova classe aquele objeto ,que é o que vamos fazer adicionando a class `paciente-invalido`.

```Javascript

if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
     if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
```

**Escutando Eventos**

Vamos iniciar falando um pouco sobre nosso código ,já possui o cálculo imc.

Porém para inserir um novo paciente é nescessário alterar nosso html o que não é nada prático,então vamos mudar isso,para isso vamos adicionar um formulário que ao inserir os dados e depois de apertar o botão adiciona-os a tabela automaticamente.

**Eventos**

Mas como vamos pegar esses dados e leva-los a tabela e tambem como eu percebo que o cliente apertou o botão,esse "perceber" tem a ver com o que o usuário está fazendo na página ou seja os `eventos do browser`, os eventos que podemos escutar com javaScript, que são clicar em algumas  coisas ,scrollar, passar o mouse em cima são ações que o usuário pode  fazer na nossa página.

E como vamos escutar esses eventos? Primeiro precisamos informar em que elemento queremos escutar nosso evento.Por exemplo queremos que apareça um aviso quando clicarmos no titúlo `Aparecida nutricionista` quero que mostre um `console.log`,para fazermos isso precisamos pegar o elemento la no Javascript e escutar esse evento de `click` quando interagirmos com esse elemento.

Então vamos pegar a `var titulo`e ao lado dela chamar a função escutadora `addEventListener()` que tem a função de escutar o evento que queremos que aconteça,no caso é o evento de `click` e quando eu estiver escutando esse evento eu quero fazer algo,no momento que meu usuário clicar naquele evento e vamos falar para ele através de uma função.

**Função Nomeada**

Vamos criar uma função chamada `mostraMensagem` nossa função vai ter uma ação bem simples que é imprimir "Olá eu fui clicado!", e eu quero que quando o cliente clicar no titulo chame a função `mostraMensagem` então vamos passar como segundo parâmetro da função `addEventListener()`.

```Javascript

titulo.addEventeListener("click,mostraMensagem");

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}
```
E se formos ao Console do browser vamos ver que ele nos mostra a mensagem.

**Função Anônima**

Outra forma de fazer é passar uma função anônima ou seja ela não possui nome e a inserimos dentro dos parâmetros da função `addEventListener`.

```Javascript
titulo.addEventListener("click",function(){
    console.log("Olha só posso chamar uma função anônima.")
});
```
Porém vamos direto ao ponto queremos que ao apertar o botão do formulário ele apresente uma mensagem,para isso precisamos buscar nosso botão no `html` assim vamos criar uma var `botaoAdicionar` e atribuir o valor de `document.querySelector` para acessarmos a rvore do html e pegar o que queremos,e vamos colocar entre parenteses o que queremos pegar no caso o `id` `("#adicionar-paciente")` se formos ate o console ele vai nos mostrar `adicionar-paciente`,após isso vamos fazer com que ao apertar o botao ele tenha uma ação ou seja que ele nos mande uma mensagem ("oi ,cliquei no botão.").

```Javascript

botaoAdicionar.addEventListener("click",function (){
    console.log("oi,cliquei no botão.");
});
```

Porém ele não funciona ,por padrão, sempre que clicamos em um botão contido em uma tag `<form>` do HTML, os seus dados serão enviados para outra página. Como não especificamos uma página para ser o alvo da tag `<form>`, a única ação realizada é a limpeza dos dados, e a página sendo recarregada em seguida. Ao fazermos isto, além do formulário, o console fica limpo também - por isso, não veremos a mensagem.

O evento de clique está sendo escutado corretamente, porém, como a página é recarregada rapidamente, não conseguiremos ver a mensagem impressa no console. Desta forma, não conseguiremos salvar os dados do paciente na tabela, nem exibir a mensagem.

**Evitando o comportamento padrão de um evento**

Sabemos que nosso botão tem um evento padrão que carrega a página de uma forma que não conseguimos ver os dados por isso precisamos,impedir que ele execute isso e faça o que iremos pedir,para isso vamos usar uma função com as caracteristica do javascript que é a `event.preventDefault();` ela significa exatamente o que diz "previne o comportamento padrão" para podermos usar ela precisamos colocar como parametro o `event` e depois iremos escrever `Oi eu sou botão e fui clicado`.

```Javascript
 var botaoAdicionar = document.querySelector("#adicionar-paciente");

 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();
     console.log("oi eu sou o botão e fui clicado")
 })
 ```

 **Adicionando Pacientes na Tabela**
 Para adicionar um paciente novo na tabela primeiro precisamos capitar os dados nos campos do formulario,para podermos utilizar os dados que são inseridos.

 Vamos começar selecionando o html no Javascript usando `document.querySelector`,vamos criar uma var com o nome de form ,que recebe o `document.querySelector("#form-adiciona")`,uma função bacana de quando você seleciona um form com `querySelector` e que conseguimos acessar o `name` de cada `input`,cada um com seu tipo `nome`,`altura`,`peso`,e para acessar aquele input e imprimi-lo no console podemos utilizar o `console.log(form.altura)`, para que quando inserirmos um dado e clicarmos no botão o nosso formulário pegue o dado  que colocamos no input e apresente no console ,nesse caso ele irá imprimir o input inteiro.

 Para que ele imprima o valor que digitamos no campo `input`,podemos usar a propriedade `console.log(form.altura.value)` a partir disso teremos o dados que inserimos no formulário.

 ```Javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();

    var form= document.querySelector(#form-adiciona)
     console.log(form.altura.value);
 })
```
**Para revisar**
O que estamos fazendo aqui? primeiro referenciamos o `form` porque na `var form` temos o acesso ao formulário criado no html,já temos o local em que queremos captar os valores => logo após isso vamos referenciar de qual campo vamos captar esses valores e => depois passando a propriedade value vamos captar o conteudo do campo requerido ou seja o valor em si.

Dando continuidade ao desenvolvimento vamos criar algumas variaveis para captarmos os valores do form ,acima somente imprimimos eles,agora vamos manipula-los,e se colocarmos um console.log chamando a variavel ela vai nos mostrar o dado inserido por nós.

```Javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();

    var form= document.querySelector(#form-adiciona)
     console.log(form.altura.value);
    
    var nome=form.nome.value;
    var altura=form.altura.value;
    var peso =form.peso.value;
    var gordura= form.gordura.value;

    console.log(peso);
    console.log(altura);
    console.log(gordura);
    console.log(nome);
 
 })
```
E agora como criamos um paciente para depois inseri-lo na tabela? ate agora so pegamos algumas coisas do html com `querySelector`,para criar um novo elemento dentro da nossa função anônima do `botaoAdicionar` vamos usar uma função chamada `createElement` o próprio nome já diz ,vamos criar um elemento novo, se observarmos no Html nosso paciente nada mais é que uma `tr` que possui várias `td` como conteúdo.

Para iniciar vamos criar uma `var pacienteTr` e logo após `=>` nossa função `document.createElement("tr")` dentro dos parenteses colocamos o que queremos criar no caso uma `tr` porém precisamos criar também as `td` pois são o conteudo da `tr`,então vamos criar variaveis que serão responsaveis pela criação das `td` como var `pesoTd` e assim por diante.

```Javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();

// Aqui captamos os dados do formulário
    var form= document.querySelector(#form-adiciona);
    
    var nome=form.nome.value;
    var altura=form.altura.value;
    var peso =form.peso.value;
    var gordura= form.gordura.value;

//Aqui Criamos as linhas da tabela com os conteudos

    var pacienteTr =document.createElement("tr");

    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var nomeTd =document.createElement("td");
    var imcTd =documentcreateElement("td");

 })
```
Já criamos as `tr` e `td` agora precisamos colocar os dados que foram pegos no `form` e colocar dentro delas ,para isso vamos usar uma função que já usamos antes que é a `textContent` ou seja, vamos pegar as variaveis  das `tr` e `td` que são as `pesoTd` etc e colocar a `.textContent` a frente para que o conteudo delas recebam o conteudo da outra variavel.

```Javascript

var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();

// Aqui captamos os dados do formulário
    var form= document.querySelector(#form-adiciona);
    
    var nome=form.nome.value;
    var altura=form.altura.value;
    var peso =form.peso.value;
    var gordura= form.gordura.value;

//Aqui Criamos as linhas da tabela com os conteudos

    var pacienteTr =document.createElement("tr");

    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var nomeTd =document.createElement("td");
    var imcTd =documentcreateElement("td");


    nomeTd.textContent= nome;
    alturaTd.textContent=altura;
    gorduraTd.textContent=gordura;
    pesoTd.textContent=peso;
    imcTd.textContent=

 })
```
 Logo após isso vamos colocar essas `td` dentro das `tr` usando a função `appendchild` que significa "coloque como filho", primeiro vamos escrever a var que vai receber como filho a outra classe então vamos colocar a `pacienteTr` junto dela a `appendChild` e entre parenteses a var que vamos passar como filha para a `pacienteTr` .

 ```Javascript

var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();

// Aqui captamos os dados do formulário
    var form= document.querySelector(#form-adiciona);
    
    var nome=form.nome.value;
    var altura=form.altura.value;
    var peso =form.peso.value;
    var gordura= form.gordura.value;

//Aqui Criamos as linhas da tabela com os conteudos

    var pacienteTr =document.createElement("tr");

    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var nomeTd =document.createElement("td");
    var imcTd =documentcreateElement("td");

//Aqui atribuimos o valor da variavel nome para nomeTd  

    nomeTd.textContent= nome;
    alturaTd.textContent=altura;
    gorduraTd.textContent=gordura;
    pesoTd.textContent=peso;
    imcTd.textContent=

//Aqui passamos as td como filhas das tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(pesoTd);
 })
```
E agora para finalizar vamos pegar nosso `tr` e colocar dentro da nossa tabela ou seja do nosso `tbody` ,mais uma vez vamos criar uma `var` que se chama `tabela` e que recebe como valor o `tbody`, vamos acessar o `tbody` no nosso html que possui um `id` chamado `tabela-pacientes`.

E logo após vamos passar como filho a var pacienteTr para tabela ou seja o tr para o tbody.

 ```Javascript

var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
 botaoAdicionar.addEventListener("click",function(event){
     event.preventDefault();

// Aqui captamos os dados do formulário
    var form= document.querySelector(#form-adiciona);
    
    var nome=form.nome.value;
    var altura=form.altura.value;
    var peso =form.peso.value;
    var gordura= form.gordura.value;

//Aqui Criamos as linhas da tabela com os conteudos

    var pacienteTr =document.createElement("tr");

    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var nomeTd =document.createElement("td");
    var imcTd =documentcreateElement("td");

//Aqui atribuimos o valor da variavel nome para nomeTd  

    nomeTd.textContent= nome;
    alturaTd.textContent=altura;
    gorduraTd.textContent=gordura;
    pesoTd.textContent=peso;
    imcTd.textContent=

//Aqui passamos as td como filhas das tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(pesoTd);

    var tabela =document.querySelector("#tabela-pacientes");

    tabela.apeendchild(pacienteTr);
 })
```

**Quebrando o código em Arquivos**

Nosso código já está bem extenso,e temos diversas funções que se misturam o que acaba muitas vezes nos confundindo,e o que queremos é a praticidade de saber aonde cada função está ,e se houver algum erro saberemos aonde é e iremos corrigir de uma maneira mais focada, um código que não é organizado dificulta adicionar novas funcionalidades e fazer isso é uma boa prática.

Então iremos criar novos arquivos js,e em cada arquivo uma parte do nosso código tera uma ação,por exemplo vamos criar o `form.js` que receberá tudo que se refere ao nosso formulário e o principal.js será o `calcula-imc.js`.

Depois de cada arquivo criado temos que importa-los no html,assim aprendemos mais uma boa prática para nossos códigos.

**Criando Funções**

Outra boa prática que é essencial para nosso código é separar ,os blocos de códigos que fizemos em partes menores ,identificando  o que cada parte do código faz ,vamos separá-los em funções ,se analisarmos nosso calcula imc,temos um form que pega os dados do paciente depois valida o peso a altura sendo responsavel também por calcular o imc e escreve-lo na tabela ou seja nesse bloco de código temos duas ou três funcionalidades presas.

Precisamos lembrar também que no arquivo `form.js` precisamos do calculo de imc que temos no `calcula-imc.js` ou seja precisamos reaproveitar esse código ,ou seja criar uma função naquele local que faça esse cálculo passando o pelo e a altura como parâmetro.

```Javascript
nomeTd.textContent =nome;
pesoTd.textContent =peso;
alturaTd.textContent =altura;
gorduraTd.textContent =gordura;
imcTd.textContent=calculaImc(peso,altura);
```
Que também seria chamada aqui

```JavaScript
if(alturaEhValida && pesoEhValido){
    var imc =peso / (altura*altura);
    tdimc.textContent = imc.tofixed(2);
}
```

Então vamos criar uma `function` com o nome de `calculaImc` passando como parâmetro peso e altura ,dois dados essenciais para a construção da conta,vamos criar uma var `imc` que recebe o valor de `0`, e logo após essa mesma variavel receberá o valor de `imc =peso/(altura*altura);` e essa função vai retornar a var imc.

```Javascript
function calculaImc(peso,altura){
    var imc = 0
    imc= peso/(altura * altura)
}
```
E já vamos aproveitar a função `calculaImc` no if acima. 

```JavaScript
if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdimc.textContent = imc.tofixed(2);
}
```
E o tofixed(2) que ficava na variavel do if passamos para quando ela retorna a `function` .

```Javascript
function calculaImc(peso,altura)
    imc = 0
    imc = peso /(altura*altura);

    return imc.tofixed(2);

```
 E após essas alterações em nosso código a tabela de clientes está em funcionamento correto,mas uma das vantagens em transformar esse código em função é que podemos usar essa função em qualquer lugar do nosso código principalmente no form aonde temos altura e peso (que usamos como parâmetro),e agora o pacienteTr também vai receber `imcTd`

 ```Javascript
nomeTd.textContent =nome;
pesoTd.textContent =peso;
alturaTd.textContent =altura;
gorduraTd.textContent =gordura;
imcTd.textContent=calculaImc(peso,altura);

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);
```
**Criando um objeto Paciente**

Continuando com as aplicações de boas práticas no nosso código ,vemos que ainda sim o arquivo `form.js` está nos passando diversos blocos de código, o ideal é continuar a modular,nosso código usando funções,podemos começar com a parte de código que extrai informações do paciente do `form`.

```Javascript
var nome =form.nome.value;
var peso =form.peso.value;
var altura=form.altura.value;
var gordura=form.gordura.value;
```

E podemos começar a criar a função que fará a substituição,desse bloco de código vamos dar o nome dela de `function obtemPacienteDoFormulario(form)` passando o `form` como parametro e essa function vai nos retornar os dados do paciente.

```Javascript

function obtemPacienteDoFormulario(form){
    var nome =form.nome.value;
    var peso =form.peso.value;
    var altura=form.altura.value;
    var gordura=form.gordura.value;
}
```

Ao analisarmos o código acima,vemos que sua função é buscar dados do paciente,sabemos que todos esses dados são caracteristicas que pertencem ao mesmo paciente então podiamos representar por uma única coisa que chamamos normalmente por `objeto`, *objetos no javascript são os que representam coisas do mundo real ou do mundo da programação que representam coisas com caracteristicas em comum*.

Por exemplo se criarmos uma `var paciente` temos a possibilidade de concatenar diversas caracteristicas para essa variavel,porém temos maneiras mais interessantes de fazer isso,que é representando através de um objeto no javascript,e para cria-lo usamos as chaves e dentro das chaves passamos as propriedades,como nome,peso,altura,gordura.

Dentro de cada propriedade  colocamos dois pontos `:` e seu valor,*form.(acessamos o form para adquirir essas informações)nome.(acessamos o input name)value;(pegamos o valor do "name")* e a virgula no final e essa função vai retornar o paciente que é nosso objeto.

```javascript

function obtemPacienteDoFormulario(form);{
    var paciente ={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value
    }
    return paciente
}
```
E logo acima do nosso código vamos chamar a função com o `form` como parâmetro, afinal para obter as informações do nosso paciente precisamos acessá-lo e tambem vamos criar uma `variavel paciente` que vai receber nossa função `obtemPacienteDoFormulario`que possui o nosso `objeto paciente`.


```Javascript 

botaoAdicionar.addEventListener("click",function(event){
event.preventDefault();

var form= document.querySelector("#form-adiciona");

var paciente= obtemPacienteDoFormulario(form);

}
```
E para finalizar o nosso objeto só falta aplicarmos o cálculo de `imc`,para isso vamos chamar nossa função `calculaImc` e como parâmetro vamos passar os valores do objeto que são essenciais pra o cálculo `imc` "form.peso.value,form.altura.value".
```javascript

function obtemPacienteDoFormulario(form);{
    var paciente ={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value ,form.altura.value)
    }
    return paciente
}
```
**Melhorando ainda mais o código**

Outra coisa que vamos melhorar no código é a parte responsável por montar as `Tr` e `Td`.

```Javascript 

var pacienteTr = document.createElement("tr");

var nomeTd =document.createElement("td");
var pesoTd =document.createElement("td");
var alturaTd =document.createElement("td");
var gorduraTd =document.createElement("td");
var imcTd=document.createElement("td");


nomeTd.textContent = nome;
pesoTd.textContent = peso
alturaTd.textContent = altura;
gorduraTd.textContent =gordura;
imcTd.textContent=calculaImc(peso,altura);


pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendchild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

```

Então vamos fazer o que já estamos fazendo com as outras funções que é,retirar esse bloco de código e aplicá-lo dentro de uma função em outro lugar,a função que iremos criar vai receber um paciente com seus dados e a partir disso criar as `Tr` e `Td` e retornar  uma `Tr` criada com todas as `Td` dentro.

* Vamos criar uma `Tr` e retornar essa `Tr` criada

```Javascript

function montaTr(paciente){
    var pacienteTr=document.createElement("tr");

    return pacienteTr;
}
```
>E nesse meio entre criar o montaTr e retornar a var pacienteTr é que vamos buscar o nome do paciente enfim colocar todo conteúdo da função.

Dentro da função vamos aplicar a parte que cria as td e atribui valores a elas,na parte que vamos atribuir o valor para o conteúdo da `td` precisamos agora colocar `paciente.` e ai sim a propriedade que desejamos pois agora estamos acessando o objeto paciente ,somente na parte do imc que não vamos precisar acessar pois já temos uma função(calculaImc) que faz esse trabalho.

```Javascript

function montaTr(paciente){
    var pacienteTr=document.createElement("tr");
      
    var nomeTd =document.createElement("td");
    var pesoTd =document.createElement("td");
    var alturaTd =document.createElement("td");
    var gorduraTd =document.createElement("td");
    var imcTd=document.createElement("td");


    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent =paciente.gordura;
    imcTd.textContent=calculaImc(peso,altura);


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendchild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
}
```
E mais acima vamos chamar nossa função `montaTr`, e salvar ela em uma variavel chamada pacienteTr ja que ela nos retorna pacienteTr.

```Javascript

var pacienteTr = montaTr(paciente);

```
E se dermos uma olhada para revisar nosso código conseguimos ver bem a diferença de estrutura ,o que só nos traz pontos positivos para entendermos melhor o que estamos fazendo.

Ao olharmos para o HTML do nosso código,vemos que ele está criando as Tr e Td normalmente porém elas não possuem classes,de acordo com o HTML todas as Tr devem possuir a classe "paciente" e cada `td` possui classes como ,info-peso,info-altura,info-gordura,para adicionar as classes precisamos usar a propriedade que já usamos la tras que é a `classList.add()` e dentro dos parenteses escrevemos o que queremos adicionar.

Então fica assim o objeto que queremos adicionar ,a classe que no caso é o `pacienteTr` vai receber o `classList.add()` e dentro dos parenteses o que vamos adicionar que no caso é (paciente).

```javascript

function montaTr(paciente){
    var pacienteTr =document.createElement("tr");
    pacienteTr.classList.add("paciente")
}
```

Assim as `Tr` estão de acordo com o resto do nosso HTML.


* Agora ao invés de fazer o mesmo processo com os `td` que são muitos acrescentando muitas linhas ao código,vamos criar uma `function` que monte esses td para nós,  que vai ser a função `montaTd` a função montaTd vai ,fazer um `document.createElement`("td") que vai estar salvo dentro da variavel `td`.

* E como conteúdo de texto do td (td.textContent) vamos passar algum dado(seja peso,altura,gordura) e vamos passar como parâmetro o dado.

```Javascript

function montaTd(dado){
    var td=document.createElement("td");
    td.textContent = dado
}
```

* E queremos adicionar uma classe também ,td (td.classList.Add("")) vamos passar uma classe e qual vai ser a classe? depende pode ser info-nome,info-peso,info-altura,então como depende vou receber como parâmetro  `classe` e no final eu retorno o td.

```Javascript

function montaTd(dado,classe){
    var td= document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
}
```
* E para compararmos o antes e depois ,no antes temos diversas linhas de código e o depois que podemos criar uma var `pesoTd` que recebe a função que acabamos de criar que é a montaTd e na montaTd passamos os valores que são o dado e a classe.

```Javascript

var pesoTd = montaTd(paciente.peso,"info-peso");
```
> Ou seja através da modulação de funções nos conseguimos montar nossa td com os valores nescessários e de uma forma mais resumida e direta.

* E para finalizar vamos colocar todas nossas `montaTd` dentro das suas respectivas variaveis,nomeTd,pesoTd,gorduraTd e tudo isso dentro da function montaTr.

```Javascript

    function montaTr(paciente){
        var pacienteTr =document.createElement("tr");
        pacienteTr.classList.add("paciente");

        var nomeTd = montaTd(paciente.nome,"info-nome");
        var pesotd = montaTd(paciente.peso,"info-peso");
        var alturatd = montaTd (paciente.altura,"info-altura");
        var gorduratd = montaTd (paciente.gordura,"info-gordura");
        var imcTd = montaTd(paciente.imc,"info-imc");

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }
```
* E para finalizar para deixar o código menor ainda não precisamos nem criar as variaveis nomeTd,alturaTd ,colocamos dentro da var pacienteTr através da appendChild nossas funções montaTd e seus valores.

```Javascript

function montaTr(paciente){
        var pacienteTr =document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(montaTd (paciente.altura,"info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

        return pacienteTr;
    }
```

Para melhorar ainda mais nosso código ,se percebermos nosso formulário não limpa as informações que colocamos nele ou seja se apertarmos o botão de adicionar ,ele vai repetir a ação com os mesmos dados,para isso precisamo configurar o botão para que após o clique ele limpe o formulário.

Para isso vamos usar a propriedade `reset()`,depois de adicionar o tr na tabela vamos colocar `form.reset()`.

```Javascript

tabela.appendChild("pacienteTr");

form.reset();
```
**Validando dados do Formulário**

Vamos iniciar validando os dados do formulário,já tratamos da parte de inserir os pacientes na tabela ,agora precisamos ajustar nosso código.

Ao testarmos os dados que inserimos no formulário vemos que qualquer número que entra acaba sendo validado,precisamos rever essa entrada de dados ao apertarmos nosso botão e queremos que ao entrar dados incorretos seja informado essa entrada.

E também antes que a linha do paciente que no caso é pacienteTr,seja adicionada na tabela os dados sejam validados,assim vamos criar uma function `validaPaciente` que vai receber obviamente um parâmetro (paciente) sabendo que esse paciente já esta preenchido porque la na nossa função `obtemPacienteFormulario` já temos o objeto paciente com seus dados fornecidos.


```Javascript

function validaPaciente(paciente){

}

```

E essa função `validaPaciente` vai testar as propriedades do paciente,como por exemplo peso e altura para ver se é uma altura válida ou se é um peso válido.

Vamos adicionar ao nosso código também uma fuction chamada `verificaPeso` que vai nos retornar o valor se ele estiver correto,no documento calcula-imc-js temos estruturas de condição que se tal numero for maior ou menor retorna um valor `false` porém na function `verificaPeso` ela vai nos passar os valores se eles forem `true` caso contrario ele nos retorna false e temos que passar o peso como parâmetro.

```Javascript
function verificaPeso(){

    if(peso >= 0 && peso < 1000){
        return true
    }
    return false
}
```
E ao invés de perguntarmos a variavel pesoEhValido e alturaEhValida podemos chamar nossa `function` aqui.

```Javascript

var pesoEhValido = verificaPeso(peso);
var alturaEhValida = true

```

Ao passarmos esse valor que é o verificaPeso para a variavel vamos ver se ele é valido ou não,podemos também alterar o if e na parte das condições colocar nossa variavel `pesoEhValido`.

```Javascript

if(!pesohValido){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-inválido");
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura invalida!");
    alturaEhValida =false;
    tdImc.textContent ="Altura inválida!";
    paciente.classList.add("paciente-invalido");
}
```
Porém ao colocar nossa variavel no `if` estamos testando se o peso é positivo mas o que queremos e que se o peso for negativo entre na condição do `if` e ao invés de trocarmos de variavel podemos usar operador de negação que é `!` que inverte os valores de true e false.

Resumindo o caminho o verificaPeso vai me retornar se o peso for true ou false e salvamos esse valor em uma variavel `pesoEhValido`,que vamos ter como valor "true ou false" e só queremos entrar no if se o valor for falso por isso colocamos o operador de negação.

Vamos fazer a mesma coisa para altura ,criando a function verificaAltura que irá receber altura como parâmetro  e fazer o teste,se minha altura for > ou = a 0 e minha altura for menor ou igual a 3 metros vamos retornar que é uma altura válida ou se não for não é valida.

```Javascript

function verificaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }
    return false;
}
``` 
E vamos fazer a mesma coisa na variavel `alturaEhValida` passando a variavel `verificaAltura` que retorna true ou false e no if vamos passar a variavel `alturaEhValida` com o operador de negação já que queremos que só entre no if valores inválidos.

```Javascript

var pesoEhValido = verificaPeso(peso);
var alturaEhValida = verificaAltura(altura);

if(!pesoEhValido){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-inválido");
}

if(!alturaEhValida){
    console.log("Altura invalida!");
    alturaEhValida =false;
    tdImc.textContent ="Altura inválida!";
    paciente.classList.add("paciente-invalido");
}
```

Fizemos isso por que agora podemos chamar essas funções la no `form`, na function validaPaciente podemos colocar dentro do `if` nossas funções ou seja verificaPeso ou verificaAltura e passarmos como parâmetro paciente.peso ou paciente.altura e concluimos a condição  se nosso verificaPeso for valido ele retorna true caso contrario  retorna false e vamos chamr a função quando clicarmos no botão.

```Javascript

function validaPaciente(paciente){
    if(verificaPeso(paciente.peso)){
        return true;
    }
    return false
}

``` 
E vamos chamar a função validaPaciente quando houver o click no botão e aplicar o if e colocar a seguinte condição se não for um paciente valido atraves do operador de negação quero que você imprima paciente invalido e queremos que ele não adicione na tabela então precisamos fazer com que ele ao sair da function não chegue na parte que adiciona na tabela,vamos entao fazer o return vazio.

```Javascript

var pacienteTr =montaTr(paciente);

if(!validaPaciente(paciente)){
    console.log("paciente inválido");
    return;
}
```
**Exibindo Mensagens de Erro**

Além de impedirmos que um paciente com dados inválidos entre na tabela ,queremos mostrar uma mensagem para o usuário informando qual problema tivemos na validação.

Na nossa function validaPaciente até então está assim:
```JavaScript
function validaPaciente(paciente) {

    if (verificaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}
```
O que podemos fazer é retornar uma mensagem de erro no `else` ao invés de só retornar false e ao invés de retornarmos `true`,retornamos uma string vazia.

```JavaScript
function validaPaciente(paciente) {

    if (verificaPeso(paciente.peso)) {
        return "";
    } else {
        return "O peso é inválido";
    }
}
```
E la emcima na hora de validar o paciente,podemos testar ,extraimos o conteudo do if:

```Javascript

var pacienteTr =montaTr(paciente);

if(!validaPaciente(paciente)){
    console.log("paciente inválido");
    return;
}
```
E depois disso criamos uma var erro que recebe validaPaciente,e dentro do if passamos a seguinte condição,se o tamanho(length) do meu erro for maior que 0 imprima tal mensagem.

```Javascript

var pacienteTr =montaTr(paciente);

var erro =validaPaciente(paciente);

if(erro.length > 0){
    console.log("paciente inválido");
    return;
}
```
Porém ao invés de imprimir no `console.log` vamos imprimir em `div`com `id`(mensagem-erro) que vamos criar no HTML abaixo de um  `input`:

```Html
 <div class="grupo">
          <label for="gordura">% de Gordura:</label>
          <input
            id="gordura"
            name="gordura"
            type="text"
            placeholder="digite a porcentagem de gordura do seu paciente"
            class="campo campo-medio"
          />
          <div id="men
          sagem-erro"></div>
        </div>
```
E precisamos referenciar isso dentro do `if` vamos criar uma var `mensagemErro` que recebe document.querySelector("#mensagem-erro") para termos acesso ao item e passarmos os dados desse item para a var e depois vamos pegar esse conteúdo através do textContent e passar o conteudo da var `erro` para `mensagemErro`:

```Javascript
var erro = validaPaciente(paciente);

if(erro.length > 0){
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
    return;
```
E para evidenciar a mensagem de erro que vai aparecer ,vamos ate o Css e criaremos um novo Seletor #mensagem-erro com a color:red;

```Css
#mensagem-erro{
    color:red;
}
```
Já fizemos para o peso porém queremos fazer para gordura e altura,
na nossa função validaPaciente estamos validando o peso primeiro, caso seja valido esse if vai nos retornar string vazia "",se não nos retorna a string "O peso é inválido",o que gostariamos de fazer é retornar algumas strings diferentes referentes a altura,porém dentro de uma função só vai existir um retorno se o peso estiver inválido ou se a altura estiver inválida.

* Sabendo disso vamos introduzir em nosso código uma ferramenta que nos retorna uma lista de strings que se chama array, vamos criar uma variavel `erros` que recebe o array(para declarar um array abrimos e fechamos colchetes).

```Javascript

function validaPaciente(paciente){
    
    var erros =[];
    
    if(verificaPeso(paciente.peso)){

    }else{
        return "O peso é inválido";
    }
    if(verificaAltura(paciente.altura)){

    }else{
        return "O peso é inválido"
    }
}
```

* E agora vamos adicionar o que queremos dentro do nosso array de erros,usando a condição if vamos fazer, se o meu !verificaPeso não estiver valido(pois colocamos a exclamação) retorno o `array erros` ponto push que é uma função que adiciona dados no array e vamos adicionar a string "Peso é inválido" ,fazendo o mesmo com o if verificaAltura.
```Javascript

function validaPaciente(paciente){
    
    var erros =[];
    
    if(!verificaPeso(paciente.peso)){
        erros.push("O peso é inválido")
    };
    
    
    if(!verificaAltura(paciente.altura)){
        erros.push("A altura é inválida")
    };
   return erros;
};
```
* Porém, o código estava adaptado para imprimir uma mensagem única. Nós gostaríamos que ele imprimisse uma lista de erros. Vamos ajustar o nome da variável em form.js:

```javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
```
* Precisaremos adicionar uma string. Mas, por exemplo, se tivéssemos 10 erros, teríamos que adicionar a mesma quantidade de tags `<span>`? Seria mais interessante termos uma lista no HTML e, para cada erro, adicionaríamos um item nessa lista. No index.html, vamos trocar o `<span>` por uma tag `<ul>` e, dentro, adicionar várias `<li>`:

```html
<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```
> Logo veremos como fazer isso com o Javascript.

**Validando o Restante dos Campos**

Se o nosso objetivo é adicionar diversas mensagens de erros, uma para cada erro que surgir para o array, teremos que acessar a função do form.js e não apenas alterar o conteúdo da <ul>. Será necessário criar uma <li> para cada erro e, depois, adicioná-la na <ul>.

Vamos analisar como está o form.js:

```Javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
```
* Como esta lógica pode ficar complicada, iremos extrair a parte de exibição das mensagens de erro para a função `exibeMensagensDeErro()`. 
* Ela será responsável por pegar o array de erros e, para cada item, criaremos uma <li> a ser adicionada na <ul> de `mensagens-erro`. Observe que faremos uma pequena alteração no id, em index.html:

```HTML
<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">

    </ul>
```
No arquivo form.js, se queremos exibir a mensagem de erro, antes teremos que criar a função exibeMensagensDeErro(erros), recebendo o array de mensagens de erros. Vamos adicioná-la logo acima da função obtemPacienteDoFormulario():

```javascript
function exibeMensagensDeErro(erros){

}
```
Para cada item do array, selecionaremos a ul, que será guardada em uma variável:

```Javascript
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
}
```

E para cada item do array, adicionaremos a tag <li>. Poderemos fazê-lo de diferentes formas, como usando o for tradicional:

```Javascript
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    for(var i = 0; i < erros.lenght ; i++){
        var erro = erros[i];
    }
}
```
Além do for, existe outro tipo de iteração, o forEach(), o qual não precisamos delimitar, e que passará por todos os elementos. Para cada item do array, será realizada uma ação.

```Javascript
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
<li></li>
```
Temos que falar que o texto da <li> será uma mensagem de erro, que está dentro do array de erros. Para termos acesso ao erro, recebemos o item de iteração dentro da function() e o textContent será o erro. Nós colocaremos li dentro ul, usando a função appendChild().

```Javascript
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
```
A função que exibe a mensagem de erro é:

```Javascript
var erros = validaPacientes(paciente);
console.log(erros);
if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
}
```
Adicionaremos o console.log() para vermos o array de erros caso ocorra algum problema.

No index.html, verificaremos que havíamos adicionado uma tag `<ul>`:

```html
<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">
    </ul>
//...

Em seguida, vamos preencher o formulário no browser. Se ocorrer algum erro, ele será exibido no console. Se cadastrarmos um paciente com os dados corretos, será impresso um array vazio.Vamos testar adicionar outro paciente com dados inválidos, usando valores negativos.

Será impresso um array com as mensagens de erro no console, além disso, o novo paciente não foi adicionado na tabela, e duas mensagens foram exibidas acima do formulário. Se inspecionarmos essas mensagens, veremos que a `<ul>` está com mensagens-erro e duas tags `<li>`:

```html
<h2 id="titulo-form">Adicionar novo paciente</h2>
<ul id="mensagens-erro">
    <li>Peso é inválido</li>
    <li>Altura é inválida!</li>
</ul>
```
A cor da fonte da mensagem não está vermelha pois mudamos o nome do id. Vamos ajustar isso no index.css e, agora, o id da <ul> é mensagens-erro e não mais mensagem-erro:

```Css
#mensagens-erro {
    color: red;
}
```
 * Adicionaremos um paciente com dados inválidos e as mensagens serão exibidas para o usuário com a fonte vermelha.

* A verificação está funcionando corretamente e o paciente não foi adicionado na tabela.

* Nosso código está todo organizado, isolamos as responsabilidades em diferentes funções, tornando simples a ação de adicionar uma nova validação. Atualmente, se não preenchermos o campo "Nome", o paciente será adicionado na tabela do mesmo jeito.

* Como validamos o peso e a altura, vale a pena validarmos o nome. Vamos acessar a função validaPaciente() e adicionar um novo if. Para verificar se um campo está em branco, podemos analisar o seu tamanho (length), se ele for igual 0, significa que o campo não foi preenchido. Por exemplo, o nome do paciente:

```Javascript
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
```
Adicionaremos a mensagem `O nome não pode ser em branco` no caso de length ser igual a `0`. Faremos validações semelhantes nos demais campos:

```Javascript
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}
```
Em seguida, testaremos o envio do formulário com os campos todos em branco.

* Veremos quatro mensagens de erros, e agora não conseguiremos mais adicionar pacientes com algum campo não preenchido.

Ao tentarmos adicionar um paciente com algum dado inválido, a mensagem é impressa. Depois da correção e dos dados serem enviados, o paciente será adicionado à tabela, mas a mensagem continuará na página, em acúmulo.
Nós queremos limpar a lista de mensagens (ul), antes que as mensagens de erro sejam exibidas. Para esvaziar a ul, removeremos todo o conteúdo HTML. Para isto, utilizaremos a propriedade innerHTML, que nos permite controlar o HTML interno de um elemento. Passaremos uma string vazia para a propriedade:

```Javascript
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
```
Deste modo, sempre que as mensagens de erro forem exibidas, as anteriores serão apagadas, de forma a validarmos o formulário.

Faremos um pequeno ajuste para os casos em que adicionamos um paciente na tabela. Vamos limpar a ul no form.js. Na variável mensagensErro, usaremos document.querySelector(). Após a adição, vamos limpar as mensagens:

```Javascript
var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

form.reset();

var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";

});
```
Agora, quando adicionamos um paciente com sucesso, as mensagens de erro são limpas da tela.

**Removendo Pacientes**

Agora que já estamos validando totalmente os nossos pacientes, podemos nos concentrar em adicionar novas funcionalidades ao site da Aparecida.

Ela pode adicionar um paciente com algum dado errado, sem querer, faltando alguma letra no nome, ou algum número no peso, por exemplo. O paciente passará pela validação, mas com os dados incorretos. E ela não conseguirá editá-lo nem removê-lo, para adicioná-lo novamente.

Então vamos implementar a opção de remoção de pacientes para a Aparecida. Ela pode ser feita através de um ícone, ou para ser mais simples, um duplo clique! Ao clicarmos duas vezes em um paciente, o mesmo é removido.

Se queremos colocar um evento de duplo clique nas linhas, devemos escutar esse evento para cada linha da tabela, então vamos fazê-lo no JavaScript.

Como estamos criando uma funcionalidade nova, em nada relacionado com o formulário ou com o cálculo de IMC, vamos criar um novo arquivo na pasta js, o remover-paciente.js. É nesse arquivo que ficará toda a lógica de remoção.

Antes de mais nada, vamos importar esse arquivo no index.html

```Html
<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>
```
Primeiramente, devemos selecionar as linhas. Todas elas possuem a classe paciente, portanto iremos selecioná-las:

```Javascript
var pacientes = document.querySelectorAll(".paciente");
```
Agora, para cada linha e paciente, faremos algo:

```javascript
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {

});
```
E para cada paciente, adicionaremos um escutador de eventos para escutar o evento de duplo clique, o dblclick:

```Javascript
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {

    });
});
```
Agora falta sabermos como removeremos um elemento do DOM com JavaScript.

A função do JavaScript responsável por remover um elemento do HTML é a remove(). Então temos que chamá-la no paciente que foi clicado.

Quem será clicado? O dono do evento, certo? Este é que sofrerá a ação de duplo clique e executará a função. Para acessar o dono do evento, em que o evento está atrelado, utilizaremos uma palavra reservada do JavaScript chamada this:

```Javascript
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});
```

O `this` é uma palavra de contexto ligada com quem acionou o evento, a quem o evento está atrelado. Como o evento está atrelado ao paciente, o this fará referência a ele.

Ao testarmos na página, e darmos um duplo clique em um paciente nativo, o mesmo é removido! Então conseguimos implementar a remoção de um paciente de um jeito bem fácil.

Mas nem tudo é perfeito, e essa implementação tem um pequeno defeito: ao adicionarmos um paciente pelo formulário, não conseguimos removê-lo. Isso porque o novo paciente não estava na página no momento em que o remover-paciente.js foi carregado (lembrando que o navegador abre a página e vai lendo o seu HTML, carregando os nossos scripts logo depois).

Então, o `script` seleciona somente os pacientes que já estão na página. Ao adicionar um ou mais pacientes, eles não estão escutando o evento! No momento em que um paciente for adicionado, deveríamos colocá-lo para ouvir o evento e executar o mesmo código, mas aí estaríamos duplicando código, que já sabemos não ser uma boa prática.

Veremos a seguir um outro jeito de removermos os pacientes nativos e aqueles que forem sendo adicionados depois da página ser carregada.

**Delegando Eventos**

Para resolver o problema da remoção de pacientes, vamos nos aproveitar de uma característica do JavaScript chamada Event Bubbling, ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, ele na verdade não acontece só no dono do evento (no nosso caso, na linha do paciente), ele acontece também no pai do paciente, no pai do pai do paciente, e assim vai subindo.

Na nossa estrutura, ao darmos um duplo clique na <tr> do paciente, o pai (<tbody>) também escuta o evento, assim com a tag <table>, até chegar no <body>.

```html
<thead>
    <tr>
        <th>Nome</th>
        <th>Peso</th>
        <th>Altura</th>
        <th>Gordura Corporal(%)</th>
        <th>IMC</th>
    </tr>
</thead>
<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">100</td>
        <td class="info-altura">-2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
</body>
```
Podemos fazer uma analogia com um copo de refrigerante, já que quando colocamos o refrigerante em um copo, suas bolhas vão do fundo até estourar na boca do copo. O evento seria semelhante a essa bolha.

Vamos comentar o código antigo e fazer um teste, primeiramente, selecionando o <tbody>:

```Javascript
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
```
Iremos colocá-lo para escutar um evento de clique, imprimindo uma mensagem no console ao ser clicado:

```javascript
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("click", function() {
    console.log("Fui clicado");
});
```
Ao voltarmos para a página, veremos que independente do ponto onde clicarmos no corpo da tabela, o evento será disparado, logo a mensagem será exibida no console. Independentemente se colocarmos o escutador de eventos em cada paciente ou no `<tbody>`, ele só precisará saber que um evento aconteceu ali dentro. O evento subirá como a bolha de refrigerante para a superfície do copo. Se colocarmos um addEventListener em cada paciente ou nas tags pai, tanto faz. Basta informá-lo de que houve um evento.

Para não termos que ficar escutando o evento a cada linha da tabela, e para as linhas adicionadas por meio do formulário, iremos delegar a responsabilidade de escutar os eventos para o pai de todos, no caso, a tag `<table>`. Faremos isso com addEventListenter() no remover-paciente.js:
```javascript
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

});
```

Dentro da função, perguntamos ao pai qual filho recebeu o clique, pois é ele que será removido. Desta vez não podemos utilizar o this, já que o dono do evento é a tabela, logo, ela acabará sendo removida. Para descobrirmos qual filho foi clicado, utilizaremos o event como parâmetro na função:

```javascript
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);

});
```
Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target. Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente o evento. O próximo passo será remover o elemento após o duplo clique:

```javascript
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.remove();
});
```

Mas se testarmos, veremos que isso quase funciona. Ao clicarmos em algum campo da tabela, apenas o `<td>` clicado será removido. No entanto, queremos remover a linha completa, ou seja, a tag `<tr>`, pai do `<td>`,apenas o td foi eliminado.

Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado e removeremos o seu pai, uma tag `<tr>`:

```javascript
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});
```
Poderemos até separar em variáveis para deixar mais explícito:

```Javascript
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.remove();
});
```
Assim, mesmo que adicionarmos novos pacientes, no momento em que ele receber um duplo clique, o evento irá subir até chegar à tabela. Esta por sua vez, estará escutando. Desta forma, o paciente será removido.

Quando clicamos em qualquer filho, o evento consegue chegar até o pai (table). Essa estratégia é muito boa por economizarmos código, deixando-o mais sucinto. E é possível simplificarmos ainda mais o código:

```Javascript
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});
```
**Filtrando os Pacientes da Tabela**

Para começar a filtrar nossa tabela de pacientes ,vamos começar criando um campo de busca ou seja uma tag `<input>` no `index.html` e criaremos também uma `<label>` com o texto `filtre`.Dentro da tag, teremos também `placeholder`, com o texto Digite o nome do paciente.

```html
<section class="container">
    <h2>Meus pacientes</h2>
    <label for="filtrar-tabela">Filtre:</label>
    <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
    <table>
        <thead>
          <tr>
             <th>Nome</th>
             <th>Peso(kg)</th>
             <th>Altura(m)</th>
             <th>Gordura Corporal(%)</th>
             <th>IMC</th>
    </tr>
</thead>
```
apoś fazermos essa alteração irá aparecer um campo,vamos fazer melhorias na parte de estilo adicionando esse código:

```Css
#filtrar-tabela {
    width: 200px;
    height: 35px;
    margin-bottom: 10px;
}
```
Agora vamos implementar o javascript dentro do código,vamos criar m novo arquivo chamado `filtra.js` dentro da pasta `js` ,importando-o dentro do index.html.

```html
<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>
<script src="js/filtra.js" ></script>
```
Nosso objetivo é que conforme o nome for digitado no campo, os pacientes relacionados à busca sejam listados. Por exemplo, ao digitarmos Doug, o paciente Douglas deverá ser exibido. O conteúdo de texto que está sendo digitado no campo de busca deverá ser pego.

Só que quando queremos filtrar? Conforme o usuário vai digitando, a cada letra digitada. Ou seja, queremos detectar o evento de digitar, conhecido como `input de dados`. Toda vez que alguém inserir dados no campo, esse evento será disparado.

Inicialmente, selecionaremos o campo de texto no filtra.js:
```javascript

var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);
```
Testando no browser, veremos que estamos conseguindo selecioná-lo. E ao clicarmos no campo, veremos o seguinte código no console:

```html
<input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
```
Queremos que ao começarmos a digitar no filtro, seja iniciado o processo de filtragem, e para isto, adicionaremos um escutador de evento. Com o addEventListener() escutaremos um evento de input. Passaremos como segundo parâmetro uma função com a ação a ser executada quando alguém clicar no campo.

```Javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo");
});
```
A cada letra que inserimos, a função é chamada, o value do campo é filtrado na tabela. Poderemos utilizar campoFiltro.value dentro da função, no entanto, campoFiltro é o dono do evento. Utilizaremos a palavra de contexto this, referente ao próprio dono do evento.

```Javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
});
```
Conforme o nome é digitado, podemos ir comparando com os de todos os pacientes da tabela com o querySelectAll(). Exibiremos aqueles que forem iguais, e os que forem diferentes serão escondidos. Vamos, então, selecionar todos os pacientes:

```JavaScript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
});
```
No entanto, queremos fazer a comparação com o nome dos pacientes, não com a tr. Precisaremos iterar sobre os pacientes, para então acessarmos o nome de cada um:
```Javascript

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
    }
});
```
Agora, selecionaremos o paciente, e a partir dele a `td` com a classe `info-nome`. Daí, extrairemos o nome do paciente:

```javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
    }
});
```
A partir de então temos acesso ao nome de todos os pacientes da tabela, e também ao conteúdo de texto do campo de filtragem, só precisaremos esconder todos os pacientes que são diferentes do conteúdo de texto, e mostrar os que são iguais.

**Implementando a Lógica de Filtragem**

Nosso próximo objetivo será esconder todos elementos diferentes do valor do campo de texto (this.value) e mostrar os que forem iguais. Para conseguirmos esconder e mostrar, usaremos o "truque" do fadeOut no index.css:

```Css
.fadeOut{
    opacity: 0;
    transition: 0.5s;
}
```
Quando quisermos deixar um paciente com fundo vermelho, adicionaremos uma classe no mesmo e, no CSS, definiremos a cor de fundo dos elementos com essa classe. Fizemos o mesmo para remover o paciente, portanto adicionaremos uma classe e, em index.css, incluiremos a classe .invisivel:

```Css
.invisivel{
    display: none;
}
```
Faremos o mesmo para esconder os pacientes, se (if) o nome for diferente do conteúdo de texto, adicionaremos uma classe. Caso não seja, isto é, se o nome for igual ao que foi digitado, removemos a classe. Faremos isso no filtra.js:

```javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        if (nome != this.value) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
});
```
Se testarmos no browser digitando Douglas, somente este paciente será exibido.

Porém, ao apagarmos o que foi digitado, a tabela com todos os pacientes não voltam a ser exibidos. Isso porque todos os pacientes estão com a classe invisivel, mas só deveríamos colocá-la quando houvesse algum conteúdo digitado no campo...

Criaremos um if para que a classe invisivel seja adicionada apenas quando houver algo digitado. Veremos se há algo digitado ou não por meio do seu length - se ele for 0, significa que o campo está em branco, e se for maior que 0, significará que há algo digitado:

```Javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if( this.value.length > 0){
        console.log("Tem algo digitado");
    }
```
Se testarmos no navegador, ao digitarmos um nome no campo de filtragem, obteremos "Tem algo digitado" no console:

Com algo digitado, queremos que o for seja executado:

```javascript

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            if (nome != this.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    }
});
```
No caso de não haver nada digitado, percorreremos todos os pacientes e removeremos a classe com um segundo for:

```javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
```
Vamos experimentar adicionar uma paciente com um nome semelhante a outro já existente: "Tati".

Ao pesquisarmos por este termo, apenas os dados de uma paciente serão exibidos. Nossa tabela está mais funcional, e mais útil para a Aparecida. Quando ela tiver uma lista gigante, poderá escolher qual paciente quer ver listado.

**Filtrando com Expressão**

Estamos com uma busca funcional, conseguimos filtrar a lista pelo nome do paciente, e quando apagamos o termo pesquisado, a lista da tabela é exibida completamente. Para tornar a nossa filtragem melhor, seria interessante que, ao digitarmos uma letra no campo de busca, todos os nomes com essa letra fossem listados. Por exemplo, ao digitarmos a letra "P", todos os pacientes que começassem com essa letra seriam exibidos. Como "Pedro", "Paulo" e "Pablo".

Conforme formos digitando as letras, a filtragem seria atualizada e a busca ficaria mais interativa.

Para que isso aconteça, é preciso compararmos letra por letra pelos termos buscados com os nomes cadastrados na lista. Seria trabalhoso fazer isso manualmente, mas o JavaScript, além de outras linguagens de programação, já possuem uma solução para a busca de texto: expressões regulares.

As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo for maior. Pode ser uma busca simples, como no nosso caso, em que queremos identificar quais nomes contêm determinadas letras; ou casos complexos, se queremos pesquisar se o parágrafo contém a palavra "nome", por exemplo, é como quando os editores de texto buscam por uma palavra usando o comando "CTRL + F".

É bastante simples criar expressões regulares. Criaremos uma variável, que no caso chamaremos expressao, e em seguida colocaremos uma expressão regular dentro dela. Vamos gerar um objeto especial do JS, adicionando `new` e o nome `RegExp():`

```javascript
var expressao = new RegExp();
```

Com a nova linha o trecho ficará da seguinte maneira:

```Javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp();
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
```
Nós poderemos passar dois parâmetros para o objeto, sendo o primeiro o texto que queremos buscar, no caso, o termo digitado no campo de busca (this.value), e o segundo parâmetro será referente às características dos termos que devem ser buscados. É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, para indicarmos a opção case insensitive:

```Javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
```
Porém, como utilizamos a expressão regular para buscar um texto específico na tabela? Em vez de compararmos com o nome inteiro do paciente (como estávamos fazendo), vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as letras digitadas no campo de busca. Para isso, a expressão regular tem o método test(), com a qual passaremos o que queremos testar:

```Javascript
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 
            if (expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
```
Esse teste irá retornar verdadeiro caso o nome contenha a expressão, ou falso caso não contenha. Como estamos testando se o nome não contém a expressão (por isso adicionaremos a classe invisivel), utilizaremos novamente o operador de negação (!). Logo, se o teste falhar, adicionaremos a classe; se não, ela será removida:

```Javascript

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
```
Agora a filtragem será feita a cada letra, deixando a busca mais dinâmica.

Vamos testar cadastrando mais um paciente com nomes que comecem com a mesma letra. Após adicionarmos os dados do "Pedro" e da "Tati", testaremos digitar a letra "P".


Em seguida, se apagarmos os termos do campo de busca, a lista de pacientes será exibida completamente na tabela. Nossa busca também será bem sucedida se buscarmos pelo termo "Tati".

**Introdução ao Ajax**

Continuando a construção da página da Aparecida Nutricionista, a última feature que vamos desenvolver é a capacidade de integração do site a um sistema externo, que também contém pacientes e está em outro computador. A Aparecida quer trazer esses pacientes para que eles fiquem cadastrados no mesmo sistema.

O sistema externo de pacientes pode ser acessado no navegador pelo endereço api-pacientes.herokuapp.com/pacientes. Nele, há uma lista de pacientes que devem ser integrados ao sistema da Aparecida.
```Json
[ 
    {  
        "nome": "Jéssica",
        "peso": 47,
        "altura": 1.54,
        "gordura": 17,
        "imc": 19.82

    },
    {
        "nome": "Flavio",
        "peso": 70,
        "altura": 1.7,
        "gordura": 17,
        "imc": 20.76
    }
```
Nós queremos que esses pacientes sejam importados com o clique de um botão para a tabela do site de modo que, quando o usuário clicar, os dados dos pacientes serão pesquisados no sistema externo e depois adicionados ao site da Aparecida.

A primeira coisa que devemos fazer é adicionar o botão na página index.html. É nele que clicaremos para buscar os pacientes externos. Adicionaremos o botão abaixo do fechamento da tag <table>:

```Html
//...
   <button id="buscar-pacientes" class="botao bto-principal">Buscar Pacientes</button>

</section>
```
No browser já veremos o novo botão, que por enquanto ainda não funcionará:

Precisaremos criar uma nova feature, e para isto vamos gerar um novo arquivo JavaScript na pasta js, que receberá o nome de buscar-pacientes.js. Importaremos este novo arquivo à página index.html:

```Html
<script src="js/calcula-imc.js"></script>
<script src="js/form.js"></script>
<script src="js/remover-paciente.js"></script>
<script src="js/filtra.js"></script>
<script src="js/buscar-pacientes.js"></script>
```

Se queremos procurar os pacientes ao clicarmos no botão de "Buscar Paciente", devemos selecioná-lo e atrelá-lo ao evento de `click`. Começaremos adicionando a variável botaoAdicionar, no arquivo buscar-pacientes.js:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

});
```

Queremos replicar o passo que fizemos com o navegador, em que sabemos como acessar um endereço que pode ser aberto em uma nova aba, digitá-lo e pressionar na tecla "Enter". Ou seja, o navegador é o responsável pela requisição, indo até a URL e nos mostrando os dados. Mas como faremos isso dentro da nossa página?

Veremos como fazer a requisição com JavaScript de modo que ela vá até a URL, busque e retorne os dados, sem perder os que já estão no site da Aparecida Nutricionista. Desta forma, não dependeremos do navegador, e a nossa página vai recarregar.

No código JavaScript, devemos acessar o endereço api-pacientes.herokuapp.com/pacientes, buscar e trazer os seus dados e colocá-los na tabela. Esse endereço é uma API, uma interface de programação que disponibiliza os dados para o usuário.

```javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    https://api-pacientes.herokuapp.com/pacientes
});
```
Não sabemos de onde vêm os dados, como e de que maneira eles foram gerados, pois eles se encontram disponibilizados e prontos para uso, sendo esta uma característica de uma API.

Ao analisarmos os dados, eles possuem uma estrutura que já conhecemos: cada paciente fica entre chaves, dentro das quais há itens formados por um par contendo chave e valor.

Além disso, todos os dados estão armazenados entre colchetes ([]), característica de um array do JavaScript. Como os dados estão disponibilizados em uma estrutura que conhecemos, será bem fácil trazê-los para dentro do código JavaScript, mas teremos que encontrar uma forma de acessá-los. Ele está com uma notação bastante parecida com o JavaScript, para realizarmos a requisição sem o navegador, somente com a linguagem.

Para fazermos essa requisição, temos um objeto bastante conhecido no JS, o XMLHttpRequest:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();
});
```
O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.

Para que ele realize as requisições, devemos ensiná-lo e configurá-lo do jeito que queremos. Por exemplo, informaremos que uma requisição será feita para o seguinte endereço: https://api-pacientes.herokuapp.com/pacientes, com alguns de seus métodos.

O primeiro será open(), com o qual especificaremos o tipo de requisição a ser feita, no caso, GET. Também indicaremos para onde queremos fazê-la:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
});
```
Essa ação será equivalente a chegarmos no navegador no momento em que ainda não enviamos a requisição, apenas verificando se o endereço está correto, se existe e está fazendo as configurações da requisição. Para que ela seja realizada, precisaremos chamar o método send():

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();
});
```

Podemos testar o nosso botão somente com esse código! Porém, ao clicarmos no botão, nada acontecerá. Por quê? Com o código atual, é como se o JavaScript estivesse abrindo uma nova aba no navegador, em que digitamos o endereço e clicamos em "Enter". Ficou faltando a parte final, de exibição dos dados para o usuário.


Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados. Esse evento é o load, característico do XMLHttpRequest:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

    });

    xhr.send();
}); 
```

E para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest. Para testarmos, podemos guardá-la em uma variável, e depois imprimi-la no console do navegador:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});
```

Agora, o xhr.responseText será exibido no console:


Ao clicarmos no botão, os dados serão impressos no console - nós conseguimos trazer os dados de outro site para o "Aparecida Nutricionista"! .

**Tratando a resposta da Requisição**

Os dados da requisição são exibidos no console, nós só temos que transformá-lo para um formato mais palpável, e depois, adicioná-los na tabela. Até o momento, as informações vêm no formato texto, todo concatenado. Poderemos averiguar qual o formato dos dados, adicionando a variável resposta.

```Javascript
botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        console.log(typeof resposta);

    });
```
No console, será retornado que o conteúdo é uma string, com uma estrutura bem parecida com um array do JavaScript...


Os dados possuem uma estrutura parecida com o objeto do JavaScript porque eles estão no formato JSON (sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.

A semelhança é tanta que podemos facilmente converter JSON (o texto da resposta da requisição) em objetos do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma string. Queremos que ele seja transformado em um array de objetos, mais útil para o JS.

Para conseguirmos transformar a resposta, que é um texto (uma string), em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript. Para realizarmos esta tarefa usaremos o método parse(). Assim, receberemos o texto em JSON, que depois será parseado. Em seguida, será retornado um objeto JavaScript. Como nossa resposta se parece com um objeto, o método entenderá isso e nos retornará um array do objetos:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);
    });

    xhr.send();
});
```

No console, veremos que já temos um array, sendo que cada item do array é um objeto que representa o paciente, basta iterar por eles e adicionar cada um na tabela.


Implementamos essa adição de pacientes à tabela, no arquivo form.js, porém, o código está preso ao escutador do evento click do botão "Adicionar":

```Javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});
```

Nós podemos reaproveitar o código criando a função adicionaPacienteNaTabela. Essa função receberá um paciente, e depois a tag tr será montada. O próximo passo será buscar a tabela e adicionar o pacienteTr nela.

```Javascript
function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
```

Nós já temos uma função, em seguida iremos chamá-la acima do form.reset(), passando o paciente:

```Javascript
 adicionaPacienteNaTabela(paciente);

form.reset();
var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";
```
A função de adicionar pacientes no form.js já fazia tudo isso antes:

```Javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});
```
Isto é, a função já montava um paciente, verificava os erros, e o adicionava na tabela. Nós poderemos chamar a função adicionaPacienteNaTabela() - com todas as ações mencionadas -, ou podemos aproveitá-la para adicionarmos os pacientes recebidos. No arquivo buscar-pacientes.js, adicionaremos adicionaPacienteNaTabela(), que por enquanto só inclui um paciente. No entanto, teremos um array com vários deles. Logo, iremos iterar pelo array usando o forEach(), e adicionaremos cada paciente contido nele.

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});
```

Passamos o paciente como parâmetro da função anônima, o qual será adicionado na tabela em seguida. Como se tornaram desnecessários, removemos os console.log()s.

Vamos verificar se está tudo funcionando no browser. Ao clicarmos em "Buscar Pacientes", a tabela será preenchida com todos os pacientes que estavam no servidor externo.

Tudo está funcionando como estava, incluindo a filtragem. Estamos conseguindo acessar o outro servidor, trazer os pacientes de lá e disponibilizá-los na tabela. A técnica utilizada nessa aula é conhecida como AJAX, essa maneira de fazer uma requisição de forma assíncrona com JavaScript.

É uma requisição assíncrona porque não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. Durante esse processo de busca de pacientes no servidor externo, é possível excluir e adicionar pacientes.

**Capturando Erros de Requisição**

Estamos conseguindo trazer os pacientes e adicioná-los à tabela com um simples clique no botão. Mas sabemos que, na web, nem todas as requisições dão certo.

Muitas vezes, ao acessarmos um site, podemos receber um erro 404. Por exemplo, ao acessarmos a plataforma da Alura por meio de uma URL inexistente, seremos notificados sobre o tal erro. E este não é o único erro possível, também existem os erros 201, 402, 503, entre outros, que podem ocorrer ao fazermos uma requisição AJAX na web.

O ideal seria que em casos em que fizéssemos uma requisição com o JavaScript, fosse possível detectar algum erro e avisar isso ao usuário.

Para testarmos se uma requisição falhou ou não, devemos verificar o seu código HTTP. Por exemplo, o código HTTP 404 indica que tivemos problema na requisição. O código para uma requisição perfeita, que indica que deu tudo certo, é 200. Então, depois que a requisição for carregada, poderemos testar se o código é este, caso contrário, significa que houve algum erro.

Para sabermos qual o código da requisição, acessaremos a propriedade status do XMLHttpRequest.

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});
```
Criaremos um if, com o qual testaremos o xhr.status e, neste caso, carregaremos os dados da página. Em caso de erro, cairemos no else e exibiremos o erro no console. Mostraremos tanto o xhr.status como xhr.responseText.

No browser, a requisição continuará funcionando. Vamos testar o que aconteceria caso utilizássemos uma URL inexistente, como https://api-pacientes.herokuapp.com/paci1111entes.

```Javascript

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
```
Com isso, o erro e a mensagem de resposta serão exibidos no console como gostaríamos, mas seria interessante deixar mais claro ao usuário que um erro ocorreu.


Ele mostra o status 404 e nos informa que a URL não foi encontrada. Ele imprimiu Cannot GET /paciente1111entes, ou seja, ele não conseguiu pegar a referida URL. Esta é uma forma para que as ações do código só sejam executadas quando as requisições funcionarem, caso contrário, avisaremos no console, ou alertaremos o usuário de algum outro modo, como por exemplo, exibir uma mensagem de erro.

Para isto, adicionaremos um span abaixo da tag <table> no arquivo index.html:

```Javascript
<main>
    <section class="container">
        <h2>Meus pacientes</h2>
        <label for="filtrar-tabela">Filtre:</label>
        <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
        <table>
            <!-- conteúdo da tabela omitido -->
        </table>
        <span id="erro-ajax" class="invisivel">Erro ao buscar os pacientes</span>
        <button id="buscar-pacientes" class="botao bto-principal">Buscar Pacientes</button>
    </section>
</main>
```

Incluímos no span a classe invisivel, e por padrão ele não aparecerá na página. E em buscar-pacientes.js criaremos a variável erro-ajax, com a qual selecionaremos o span. Em caso de erro, removeremos a classe invisivel, deixando a mensagem visível para o usuário mesmo para aqueles que estiverem com o console fechado:

```Javascript
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
```

Se alterarmos a URL para uma que não exista, a mensagem "Erro ao buscar os pacientes" é apresentada ao usuário.


No caso da requisição ser bem sucedida e a requisição ocorrer normalmente, nós ocultaremos a mensagem novamente, adicionando a classe invisivel e movendo a variável erroAjax para cima do if:

```Javascript
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

xhr.addEventListener("load", function() {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
});

xhr.send();
});
```

Ao testarmos, verificaremos que tudo ocorre conforme esperado. No caso de erro, visualizaremos a mensagem e, se ajustarmos o erro da URL, deixaremos de ver a mensagem de erro.


Nesta aula aprendemos o suficiente para fazermos requisições para outros servidores, usamos o método open() para abrir a requisição e configurarmos o método GET para o seu envio. O send() é o método que efetivamente envia a requisição, após o qual devemos escutar a resposta para sabermos quando ela retornar no responseText. Em seguida, ela será "parseada" com o JSON.parse, se a resposta for recebida no formato JSON - texto com "cara" de JavaScript.