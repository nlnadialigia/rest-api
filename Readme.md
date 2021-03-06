<h1 align="center">API REST</h1>


<h1 align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/rest-api?color=91091e" />

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/rest-api?color=91091e"/>
   
  <a href="./license.md">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-informational?color=91091e"/>
  </a>
</h1>


<p align="center">
  <a href="#-information_source-sobre-o-projeto">Sobre</a> •
  <a href="#-open_file_folder-projeto">Projeto</a> • 
  <a href="#-woman_office_worker-autora">Autora</a> • 
  <a href="#-pencil-licença">Licença</a>
</p>
<br>

# ℹ️ Sobre o projeto 

Repositório de estudo de REST API com a [série do Rodrigo Branas no youtube](https://youtube.com/playlist?list=PLQCmSnNFVYnQ28Gd7SmWiM-dChqaWiy8i), com a criação de uma API para gerenciamento de posts de um blog.

<br>

# 📂 Projeto

A api foi desenvolvida em camadas, isolando a responsabilidade de cada uma.

Foram desenvolvidos testes independentes para cada endpoint e middleware de tratativa de erros.

<br>

## ⚙️ Como rodar o projeto

📌 Clonar o repositório
```bash
git clone https://github.com/nlnadialigia/rest-api.git
```

📌 Acessar a pasta do projeto
```bash
cd rest-api
```

📌 Instalar as dependências
```bash
yarn
```

📌 Iniciar o projeto
```bash
yarn dev
```

📌 Rodar os testes
```bash
yarn test
```

📌 Teste as rotas pelo [Insomnia](https://insomnia.rest/):

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fnlnadialigia%2Frest-api%2Fmain%2Finsomnia.json)

<br>

📌 Ou se preferir, veja a documentação gerada no [Postman](https://www.postman.com/)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/14773197/Tz5qaHEV)


<br>

## ⚙️ Bibliotecas utilizadas

### 📌 Como dependência

- [Axios](https://www.npmjs.com/package/axios)
- [Express](https://expressjs.com/pt-br/)
- [Pg-promise](https://www.npmjs.com/package/pg-promise) 
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Jest](https://jestjs.io) 

### 📌 Como dependência de desenvolvimento

- [Nodemon](https://nodemon.io)
- [Eslint](https://eslint.org)
- [Husky](https://github.com/typicode/husky)
- [Git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [Lint-staged](https://github.com/okonet/lint-staged)


<br>

# 👩‍💼 Autora
<br>

<img style="border-radius: 50%" src="./assets/picture.jpg" width="100px;" alt="Picture"/> 
<p><b>Nádia Ligia, desenvolvedora back-end em formação.</b></p>

<a href="https://www.linkedin.com/in/nlnadialigia/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin -91091e?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/" />
</a>&nbsp;
<a href="mailto:nlnadialigia@gmail.com">
  <img alt="Email" src="https://img.shields.io/badge/-Email-91091e?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com" />
</a>&nbsp;
<a href="https://www.nlnadialigia.com">
  <img alt="Homepage" src="https://img.shields.io/badge/-Homepage-91091e" />
</a>

<br><br>

# 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
