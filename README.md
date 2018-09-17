# Teste dos fronts

Construa uma aplicação que fará uma simulação de investimento utilizando juros composto. A aplicação terá duas telas:

## Primeira tela

A primeira tela deve ter um formulário com os campos: `nome`, `mensalidade`, `tempo de contribuição` e um botão `simular`.

Ao clicar em simular, deve ser feito um POST na api [http://api.mathjs.org/v4/](http://api.mathjs.org/).

O body deverá ser um JSON com a seguinte estrutura: `{ "expr": "" }`. Em `expr` vai a expressão matemática para calcular o juros compostos. Deverá  ser usada a seguinte fórmula: `[valor da mensalidade * (((1 + [taxa de juros]) ^ [tempo de contribuicao em meses] - 1) / [taxa de juros])`.

**Exemplo:**

Se os parametros forem: 

> Valor da mensalidade: **R$ 20,00**<br/>
> Taxa de juros: **0,517% ao mês**<br/>
> Tempo de contribuição: **2 anos**

O body da request deverá ser:

```json
{ "expr": "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)" }
```

## Segunda tela

A segunda tela deverá exibir um texto com as informaçoes dos campos de nome, mensalidade, tempo e o resultado da request. 

**Exemplo:**

Olá **[nome]**, juntando **R$[mensalidade]** todo mês, você terá **R$[resultado da request]** em **[tempo]**.

## Wireframe de exemplo

![alt text](wireframe.png)

## Outras informações

- O layout é livre.
- A tecnologia é livre. Use a que te deixa mais a vontade.
- Tente colocar na aplicação tudo o que aprendeu até agora ou pelo menos o que acha mais legal.
- Testes são legais, mas não obrigatórios.
- Você pode enviar o teste em um pull-request, um link do repositório ou um zip mesmo.
- Qualquer dúvida envie um e-mail para [vagasfront+teste@ciclic.com.br](mailto:vagasfront+teste@ciclic.com.br?subject=Me%20ajuda%20fronts).

Boa sorte :)
