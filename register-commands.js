// *** SLASHCOMMANDS ***
// La estructura del documento es similar a deploy-commands.
// La finalidad del script es registrar los comandos en el guild para ejecutar con Bot offline.
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const slashcommands = [];
const slashcommandsPath = path.join(__dirname, './slashcommands/');
const slashcommandFiles = fs.readdirSync('./slashcommands/').filter(file => file.endsWith('.js'));

for (const file of slashcommandFiles) {
	const slashfilePath = path.join(slashcommandsPath, file);
	const slashcommand = require(slashfilePath);
	slashcommands.push(slashcommand.data.toJSON());
}
const rest = new REST({ version: '9' }).setToken(token);
(async () => {
	try {
		console.log('Se han comenzado a actualizar los comandos de tipo: (/) commands.');
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: slashcommands },
		);
		console.log('Se actualizaron los comandos de tipo: (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();