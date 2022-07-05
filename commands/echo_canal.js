const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo_canal')
		.setDescription('Envía al chat lo que escribes.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('El texto a enviar.')
				.setRequired(true)),
	async execute(interaction) {
		const string = interaction.options.getString('input');
		await interaction.reply(string);
		const canal = interaction.client.channels.cache.find(channel => channel.id === '990109198677315614');
		canal.send (string);
	},
};