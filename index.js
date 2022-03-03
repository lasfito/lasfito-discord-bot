const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//sistema 24/7//

const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("message", (message) => {
  if (message.content === "/serverinfo") {
    const embed = new MessageEmbed()
      .setTitle(" INFORMACION ")
      .setColor(0x83b1d6)
      .setThumbnail(
        "https://blogger.googleusercontent.com/img/a/AVvXsEheiQ9M3cjIh4R1P9vSalC0B5hk7JgXggeqMjridC0_Q6gT_udeJIsMXLy9ifSbTEG3eyqUZpmnRatwik3iZiciKlyqLd8mV3PQ8FR-U8E_gsjfR7cMHIFSM0YS1eqtStyLi3FSLshwRMNIh7SpiEUfdYF9XqS3r5hr41y-qsObb8ecesgafsDp4Xk_=w315-h85"
      )
      .setDescription("Informacion del Servidor")
      .addField(" :earth_americas: Region ", message.guild.region)
      .addField(
        " :bust_in_silhouette: Dueño: ",
        message.guild.owner.displayName
      )
      .addField(" :busts_in_silhouette: Miembros: ", message.guild.memberCount);
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content === "/redes") {
    const embed = new MessageEmbed()
      .setTitle(" REDES SOCIALES ")
      .setColor(0x83b1d6)
      .setThumbnail(
        "https://blogger.googleusercontent.com/img/a/AVvXsEheiQ9M3cjIh4R1P9vSalC0B5hk7JgXggeqMjridC0_Q6gT_udeJIsMXLy9ifSbTEG3eyqUZpmnRatwik3iZiciKlyqLd8mV3PQ8FR-U8E_gsjfR7cMHIFSM0YS1eqtStyLi3FSLshwRMNIh7SpiEUfdYF9XqS3r5hr41y-qsObb8ecesgafsDp4Xk_=w315-h85"
      )
      .setDescription("Todas las Redes Sociales")
      .addField(
        " :red_square: Youtube ",
        "[@lasfito](https://www.youtube.com/channel/UCwfeUZwjfNsIFqFURiqkLSw/videos)",
        true
      )
      .addField(
        " :blue_square: Twitter ",
        "[@lasf1to](https://twitter.com/lasf1to)",
        true
      )
      .addField(
        " :placard:  Website ",
        "[Boletín 1-2-3](https://lasfi.to/1-2-3/)",
        true
      );
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content === "/ultimovideo") {
    const embed = new MessageEmbed()
      .setTitle(" ULTIMO VIDEO ")
      .setColor(0x83b1d6)
      .setThumbnail(
        "https://blogger.googleusercontent.com/img/a/AVvXsEheiQ9M3cjIh4R1P9vSalC0B5hk7JgXggeqMjridC0_Q6gT_udeJIsMXLy9ifSbTEG3eyqUZpmnRatwik3iZiciKlyqLd8mV3PQ8FR-U8E_gsjfR7cMHIFSM0YS1eqtStyLi3FSLshwRMNIh7SpiEUfdYF9XqS3r5hr41y-qsObb8ecesgafsDp4Xk_=w315-h85"
      )
      .setDescription("Resuelvo Prueba Técnica Fro..")
      .addField(
        " :red_square: Youtube ",
        "[Ir al Video](https://www.youtube.com/watch?v=-xbe8Fw1-d0)",
        true
      )
      .setImage(
        "https://blogger.googleusercontent.com/img/a/AVvXsEhallBfe4woAxOXCDXgOhtbatFkYTxT_dGKadgXZqOwW3khAQJiW1Feb-WpWygQ6mqA3m-Q-A4d5vFrdGnghTx6sERKv09rgHbf0Fs-dlQ6Ye-US3v7dBbp9wPBk-asKVtCfCjR6KEXCpyU6q8K1jJdmBsi4vY55WgByrdVEELZkbUdxJJF7ECkXbz0"
      );
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content === "/comandos") {
    const embed = new MessageEmbed()
      .setTitle(" TODOS LOS COMANDOS ")
      .setColor(0x83b1d6)
      .setThumbnail(
        "https://blogger.googleusercontent.com/img/a/AVvXsEheiQ9M3cjIh4R1P9vSalC0B5hk7JgXggeqMjridC0_Q6gT_udeJIsMXLy9ifSbTEG3eyqUZpmnRatwik3iZiciKlyqLd8mV3PQ8FR-U8E_gsjfR7cMHIFSM0YS1eqtStyLi3FSLshwRMNIh7SpiEUfdYF9XqS3r5hr41y-qsObb8ecesgafsDp4Xk_=w315-h85"
      )
      .setDescription("Todos los Comandos Del Servidor")
      .addField(" :pencil: /serverinfo ", "[Informacion del Servidor]()")
      .addField(" :stars: /redes ", "[Ver redes Sociales]()")
      .addField(" :red_square:  /ultimovideo ", "[Ver el ultimo Video]()");
    message.channel.send(embed);
  }
});

client.on("ready", () => {
  console.log(`INICIADO COMO BOT: ${client.user.tag}`);
  precence();
});

//---------------------------- CODIGO DEL BOT ----------------------------//

const mySecret = process.env["TOKEN"];
client.login(process.env.TOKEN);
