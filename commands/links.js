const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('links')
		.setDescription('Envía al chat lo que escribes.')
		.addStringOption(option =>
			option.setName('descripcion')
				.setDescription('Un comentario y el Link.')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('link')
				.setDescription('Un comentario y el Link.')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('canal')
				.setDescription('El canal a donde va el link.')
				.setRequired(true)
				.addChoices(
					{ name: 'General', value: '990109198677315614' },
					{ name: 'Humor', value: '990290987605704775' },
					{ name: 'Trabajo', value: '990299784353030144' },
					{ name: 'Ciencia', value: '990110275967549461' },
					{ name: 'Matemáticas', value: '990301197342740510' },
					{ name: 'Programación', value: '990108056102797422' },
					{ name: 'Cursos', value: '982747608604893184' },
					{ name: 'Libros', value: '990301690701938730' },
					{ name: 'Idiomas', value: '990303853826179082' },
					{ name: 'Software', value: '982749015936479232' },
					{ name: 'Hardware', value: '993772431493828609' },
					{ name: 'Diseño', value: '990292508389015654' },
					{ name: 'Filosofía', value: '996301164276613122' },
					{ name: 'Literatura', value: '996301203480780891' },
					{ name: 'Películas/Series', value: '990108332717121556' },
					{ name: 'Música', value: '990108513101561856' },
					{ name: 'Imágenes', value: '990108802047180831' },
					{ name: 'Videojuegos', value: '990109771740905473' })),
	async execute(interaction) {
		const name = interaction.user.username;
		const datos = interaction.options.getString('descripcion');
		const string = interaction.options.getString('link');
		const objetivo = interaction.options.getString('canal');
		const canal_1 = interaction.client.channels.cache.find(channel => channel.id === '694694346351444083');
		const canal_2 = interaction.client.channels.cache.find(channel => channel.id === objetivo);
		await canal_1.send (`  ${name} \n Descripción:  ${datos} \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n ${string}`);
		
		await canal_2.send (`  ${name} \n Descripción:  ${datos} \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n ${string}`);
	},
};