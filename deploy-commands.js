// *** SLASH COMMANDS *** 
// En esta sección se colocan los constructores de los comandos. Para llamarlos en Discord.

// Estas librerías deben estar instaladas en el proyecto. Se relacionan acá.
// Vincúla a config.json porque allí están las credenciales de acceso.
// Se agregan los recursos para usar rutas y archivos dentro del proyecto.
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

// Direcciona a donde se han creado los comandos.
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
// Ubicado el directorio y filtrado los archivos. Los carga para ejecutar.
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Los comandos se han registrado exitosamente.'))
	.catch(console.error);