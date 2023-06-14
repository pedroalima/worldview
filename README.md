![#](./public/logo%201.svg)

Bem-vindo ao WorldView, um projeto que utiliza a API REST Countries para exibir informações detalhadas sobre diferentes países. Nesta plataforma, os usuários podem explorar uma lista completa de países, realizar pesquisas específicas e filtrar por região. Além disso, é possível alternar entre os modos de cores claro e escuro. O WorldView proporciona uma experiência interativa e informativa sobre os países ao redor do mundo.

Projeto construído a partir do desafio disponível da [FrontendMentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Utilizei o design fornecido pela plataforma e elaborei a página da maneira mais fidedigna possível, desenvolvido com React.js e SASS. E esse foi o meu resultado final 💻<https://worldview-chi.vercel.app/>.

![#](./public/Frame%201.svg)
![#](./public/Frame%202.svg)

> Veja o comparativo da minha solução com o resultado esperado, [clicando aqui!](https://www.frontendmentor.io/solutions/worldview-ZmQ7dXYxct)

</br>

## 🎯 Objetivos

Os usuários devem ser capazes de:

> - Visualizar todos os países da API na página inicial
> - Pesquisar por um país usando um campo de entrada
> - Filtrar países por região
> - Alternar o esquema de cores entre o modo claro e escuro

</br>

## 🔧 Propriedades e Tecnologias

> - React
> - Vite
> - SASS
> - Mobile-first
> - Semântica HTML
> - API (Rest Countries)

</br>

## 🧠 Meu aprendizado

> - Hooks: useEffect

O Hook useEffect é conhecido por sua complexidade, por isso dediquei esse projeto a compreender um pouco mais sobre seus aspectos. Seu propósito é combater os efeitos colaterais que ocorrem na renderização dos componente, podemos utiliza-lo em chamadas de APIs, manipulação do DOM ou chamadas de ouvintes de eventos.

React.js

```js
...
useEffect(() => {
      getDataCountries();
  }, []);
...
```

A função é composta por dois argumentos, uma função de efeito e um array de dependências (opcional).

Como primeiro argumento, a função de efeito pode conter qualquer código que você deseje executar, como no exemplo acima, podemos fazer uma requisição HTTP.

Já como segundo argumento, mesmo que opcional, o array de dependência é usado para informar quando chamar o efeito, por padrão, sem o array de dependência, o efeito é chamado após cada renderização, um array de dependência vazio diz que o efeito nunca precisa ser executado novamente, já um array de dependência não vazio diz para executar o efeito somente quando qualquer um dos valores do array de dependência é alterado.

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://worldview-chi.vercel.app/>.

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
