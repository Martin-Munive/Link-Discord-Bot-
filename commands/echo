const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('simon_dice')
		.setDescription('Envía al chat lo que escribes.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('El texto a enviar.')
				.setRequired(true)),
	async execute(interaction) {
		const string = interaction.options.getString('input');
		await interaction.reply(string);
	},
};