const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('operador')
		.setDescription('Es el comando más simple para verificar el Bot.'),
	async execute(interaction) {
		await interaction.reply('Me encuentro Online.\nLos comandos están funcionando.');
	},
};