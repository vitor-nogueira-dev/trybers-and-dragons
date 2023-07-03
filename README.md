
# Projeto Trybers ans Dragons

###  Proposta: 

<details>
<summary>📝 Proposta</summary>
Este projeto tem como objetivo aplicar os princípios da arquitetura SOLID e da Programação Orientada a Objetos (POO) em um jogo de interpretação de papéis (RPG), chamado Trybers and Dragons - T&D. </br>

Em T&D, os jogadores assumem o papel de personagens que pertencem a diferentes raças e possuem arquétipos específicos. Cada raça define características como pontos de vida e destreza, enquanto os arquétipos representam a vocação e habilidades das personagens. </br>

O jogo envolve combates entre personagens e monstros, com base em atributos e habilidades específicas. Os jogadores são desafiados a completar quests e explorar um mundo cheio de masmorras e perigos.  </br>

Neste projeto, foi aplicada a arquitetura SOLID e os princípios de POO para garantir um código bem estruturado, flexível e de fácil manutenção.
</details>

## Instalação:

<details>
  <summary>🐳 Com Docker</summary>

Clone este repositório:
```bash
git clone git@github.com:vitor-nogueira-dev/trybers-and-dragons.git
```

Entre no diretório e instale as dependências:

```bash
cd trybers-and-dragons
```

Rode os serviços `node` e `db` com o comando `docker-compose up -d`

* Esses serviços irão inicializar um container chamado `trybers_and_dragons`
  
* A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

* Use o comando `docker exec -it trybers_and_dragons bash`

* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

* Instale as dependências [Caso existam] com `npm install` dentro do container `trybers_and_dragons`

⚠️ Atenção: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no `package.json` (`npm start, npm test, npm run dev`, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

⚠️ Atenção: Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.
</details>

<details>
<summary>🐳 Sem Docker</summary>

Instale as dependências [Caso existam] com `npm install`

⚠️ Atenção Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

✨ Dica: Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.
</details>

<details>
  <summary>💡 Stacks utilizadas</summary>

  Linguagem de programação: ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp; </br>
  Estrutura de desenvolvimento: ![SOLID](https://img.shields.io/badge/SOLID-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp; </br>
  Programação Orientada a Objetos: ![POO](https://img.shields.io/badge/POO-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp; </br>
  Ferramenta de análise de código estática: ![ESLint](https://img.shields.io/badge/ESLint-00000F?style=for-the-badge&logo=eslint&logoColor=white)&nbsp; </br>
  Ferramenta de formatação de código: ![Prettier](https://img.shields.io/badge/Prettier-00000F?style=for-the-badge&logo=prettier&logoColor=white)&nbsp; </br>
</details>


