// Links_Bot.
// Es un Bot de propósito general, para las necesitades de los usuarios de el grupo ThePros.
// Su propósito principal es ordenar y administrar los elementos que se comparten en el chat.
// Tiene un set de funciones personalizadas:
// FUNCIONES:
// 1.(P) Da un formato a los links publicados en Discord. Los categoriza y pone palabras clave.
// 2.(P) Verificar los canales para evaluar lo publicado y comentar en el canal general la Metadata.
// 3.(P) Hacer inventario de lo que se ha publicado, en el momento, en el día de la consulta.

// *** CREACIÓN DEL CLIENTE E INGRESO - PARA PASAR A ONLINE ***
// Indica que es necesario vincular discord.js para tomar las funciones.
// Vincula a config.json porque ahí está el TOKEN del Bot.
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Crea la instancia para el cliente.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Mensajes de verificación, para ingreso exitoso.
client.once('ready', () => {
	console.log('Trinity... Estoy dentro!');
});

// *** RESPONDER A LAS INTERACCIONES ***
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'operador') {
		await interaction.reply('Responde con Hola, Neo!');
	} else if (commandName === 'servidor') {
		await interaction.reply(`Nombre del servidor: ${interaction.guild.name}\nCantidad de miembros: ${interaction.guild.memberCount}\nFecha de creación: ${interaction.guild.createdAt}\nCanales: ${interaction.guild.channels}`);
	} else if (commandName === 'usuario') {
		await interaction.reply(`Usuario: ${interaction.user.tag}\nID: ${interaction.user.id}`);
	}
});

// Inicia sesión en  Discord con el Token.
client.login(token);