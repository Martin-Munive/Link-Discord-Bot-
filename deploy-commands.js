// *** SLASH COMMANDS *** 
// En esta sección se colocan los constructores de los comandos. Para llamarlos en Discord.

// Estas librerías deben estar instaladas en el proyecto. Se relacionan acá.
// Vincúla a config.json porque allí están las credenciales de acceso.
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('operator').setDescription('Responde con Hola, Neo!'),
	new SlashCommandBuilder().setName('servidor').setDescription('Responde con información del servidor!'),
	new SlashCommandBuilder().setName('usuario').setDescription('Responde con información del usuario!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Los comandos se han registrado exitosamente.'))
	.catch(console.error);