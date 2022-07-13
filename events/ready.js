module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Listo! Conectado como: ${client.user.tag}`);
		const canal_1 = client.channels.cache.find(channel => channel.id === '694694346351444083');	
		canal_1.send ('Me encuentro Online.\nLos comandos están funcionando.');
	},
};