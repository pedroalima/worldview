![#]()

Bem-vindo ao WorldView, um projeto que utiliza a API REST Countries para exibir informações detalhadas sobre diferentes países. Nesta plataforma, os usuários podem explorar uma lista completa de países, realizar pesquisas específicas e filtrar por região. Além disso, é possível alternar entre os modos de cores claro e escuro. O WorldView proporciona uma experiência interativa e informativa sobre os países ao redor do mundo.

Projeto construído a partir do desafio disponível da [FrontendMentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Utilizei o design fornecido pela plataforma e elaborei a página da maneira mais fidedigna possível, desenvolvido com React.js e SASS. E esse foi o meu resultado final 💻<https://worldview-chi.vercel.app/>.

![#]()

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

Vários conceitos foram abordados, mas com foco nos seguintes recursos:

> - Hooks: useEffect
> - Estrutura try-catch

Compreender esses conceitos é essencial para desenvolver aplicações web interativas e interagir com APIs externas de forma eficiente.

React.js

```js
...
useEffect(() => {
    try {
      const getDataApi = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=`
        );
        const jsonRes = await res.json();
        setAddress(jsonRes);
      }

      getDataApi()

    } catch(error) {
      console.log(error)
    }

  }, [])
...
```

Os hooks useState e useEffect são recursos do React que permitem gerenciar o estado e lidar com efeitos colaterais em componentes funcionais. A função async...await facilita a manipulação de promises com escrita de código assíncrono de forma mais legível e concisa. A função fetch é utilizada para fazer requisições HTTP e obter dados de uma URL, retornando uma promise que pode ser manipulada com os métodos then() e catch(). Promises são objetos que representam a conclusão ou falha de operações assíncronas. A estrutura try-catch é usada para capturar erros e realizar tratamentos adequados. As APIs, como o IPify, fornecem conjuntos de regras e protocolos para interação entre softwares, permitindo que você faça requisições e obtenha dados úteis para o seu aplicativo.

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://ipmap.vercel.app/>.

Observação: os testes referente ao layout e responsividade foram realizadas somente utilizando as resoluções 375px e 1360px.

Veja uma demonstração

<video src="public/2023-06-07%2016-27-05.mp4" controls title="Title"></video>

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
