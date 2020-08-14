import Server from './structs/Client';
import MessageEmbed from './structs/MessageEmbed';
import { TOKEN } from './Constants';
import { join } from 'path';
import { inspect } from 'util';

const Client = new Server(TOKEN, {
	restMode: true,
	defaultImageFormat: 'png',
	defaultImageSize: 256,
	messageLimit: 300,
});

Client.loadDirectory(join(Client.constants.FILEDIRS.ROOT(), 'commands'))
	.reloadEvents()
	.connect();

process.on('unhandledRejection', (reason: Error | unknown) => {
	if (reason instanceof Error) {
		if (Client.bot) {
			const { code } = new MessageEmbed()
				.setColor(Client.constants.COLORS.ORANGE)
				.setTitle('Unhandled Promise Rejection')
				.setDescription(Client.constants.DISCORD.CODEBLOCK(inspect(reason).slice(0, 2000), 'js'))
				.setTimestamp();
			Client.createMessage(Client.constants.CHANNELS.ERRORS, { embed: code }).catch(() => undefined);
		}

		Client.console.error(`[Unhandled Promise Rejection] ${reason}`);
	}
});