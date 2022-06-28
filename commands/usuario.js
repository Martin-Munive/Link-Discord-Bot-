const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('usuario')
		.setDescription('Información del usuario.'),
	async execute(interaction) {
		await interaction.reply(`Usuario: ${interaction.user.tag}\nID: ${interaction.user.id}`);
	},
};