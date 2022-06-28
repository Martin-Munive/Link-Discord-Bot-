const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servidor')
		.setDescription('Información del servidor.'),
	async execute(interaction) {
		await interaction.reply(`Nombre del servidor: ${interaction.guild.name}\nCantidad de miembros: ${interaction.guild.memberCount}\nFecha de creación: ${interaction.guild.createdAt}\nCanales: ${interaction.guild.channels}`);
	},
};