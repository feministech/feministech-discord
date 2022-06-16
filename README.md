# Bot do Discord da Feministech

O Bot do Discord da Feministech é um projeto que visa adicionar cargos relacionados à pronomes, sexualidades, e áreas da tecnologia de interesse da pessoa.

O bot atualmente funciona lendo as reações de uma mensagem específica no servidor, e atribuindo cargos às pessoas que reagirem.

Atualmente, os cargos que o bot consegue adicionar são:

## Cargos relacionados às pessoas que produzem algum conteúdo:

- @🎥  Streamer: quem faz live;
- @🎨Creator: quem produz conteúdo, sejam eles artigos, vídeos, postagens nas redes sociais, entre outros;
- @🎙️Pessoa Palestrante: quem fez ou faz palestras na comunidade ou fora dela;

## Cargos relacionados a identidade de gênero, orientação sexual e pronomes:

- 🏳️‍🌈: @LGBTQIA+ 
- 🏳️‍⚧️ : @Trans
- 💗 : @não monog
- 💛: @NaoBinarie 
- 🟤: @Elu/Delu 
- 🟢: @Ela/Dela 
- 🟡: @Ela/Delu 
- ⚪: @TodosPronomes 

## Cargos relacionados ao que você faz:

- 🥑: @Devrel 
- 💻: @Backend 
- 🖥️ : @Frontend 
- 🎛️ : @QA
- 🛰️ : @Segurança da Informação 
- ⚙️ : @Devops 
- 📱: @Mobile 
- 🔎: @UX 
- 📗: @Estudante 

# Como rodar o bot?

Para rodar o bot, crie um arquivo chamado `.env` e insira o token do [bot do discord](https://discord.com/developers/applications) dessa forma:

```
TOKEN=seutoken
```

Depois, rode o comando `npm install` para instalar as dependências, e `node src/index.js` para iniciar o bot.
