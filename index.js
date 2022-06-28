// Links_Bot.
// Es un Bot de propósito general, para las necesitades de los usuarios de el grupo ThePros.
// Su propósito principal es ordenar y administrar los elementos que se comparten en el chat.
// Tiene un set de funciones personalizadas:
// FUNCIONES:
// 1.(P) Da un formato a los links publicados en Discord. Los categoriza y pone palabras clave.
// 2.(P) Verificar los canales para evaluar lo publicado y comentar en el canal general la Metadata.
// 3.(P) Hacer inventario de lo que se ha publicado, en el momento, en el día de la consulta.

// *** CREACIÓN DEL CLIENTE E INGRESO - PARA PASAR A ONLINE ***
// Para comenzar a leer los comandos desde otros archivos.
// Las librerías permiten leer rutas y archivos dentro del proyecto.
const fs = require('node:fs');
const path = require('node:path');
// Indica que es necesario vincular discord.js para tomar las funciones.
// Vincula a config.json porque ahí está el TOKEN del Bot.
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Crea la instancia para el cliente.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// **********************************************************************************
// *** Comandos ***
// Los comandos se leen desde una colección formada por archivos en una carpeta.
// Los comandos están en una carpeta con el mismo nombre.
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Agrega un nuevo elemento a la colección.
	// La llave es el nombre del comando. El valor es el módulo exportado.
	client.commands.set(command.data.name, command);
}

// **********************************************************************************
// *** Eventos ***
// La conexión se verifica por medio de Eventos.
// Los eventos están en la carpeta con el mismo nombre.
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
// Se llama a los comándos dinámicamente.
// No hay una lista condicional de verificación. Se buscan en la carpeta de comandos.
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Hubo un error al intentar ejecutar el comando!', ephemeral: true });
	}
});
// Inicia sesión en  Discord con el Token.
client.login(token);