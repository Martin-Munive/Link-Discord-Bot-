const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('link_basico')
		.setDescription('Le da formato al link.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Formato para clasificar.')
				.setRequired(true)),
	async execute(interaction) {
		const string = interaction.options.getString('input');
		await interaction.reply(`███████████████████████████████\nCategoría | Subcategoría | Palabras clave\n ${string}\n███████████████████████████████`);
	},
};