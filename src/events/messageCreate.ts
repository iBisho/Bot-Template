import Event from '../structs/Event';
import Server from '../structs/Client';
import MessageEmbed from '../structs/MessageEmbed';
import { v4 as uuid } from 'uuid';
import { Message } from 'eris';
import { inspect } from 'util';

export default class MessageCreateEvent extends Event {
	constructor() {
		super('messageCreate');
	}

	async execute(client: Server, message: Message) {
		if (message.channel.type !== 0) return;
		if (!message.member) return;

		if (!message.content.startsWith(client.prefix)) return;
		this.handleCommand(client, message);
	}

	async handleCommand(client: Server, message: Message) {
		if (message.channel.type !== 0) return;
		if (!message.member) return;
		const command = message.content.split(' ')[0].slice(client.prefix.length).toLowerCase();
		const args = message.content.split(' ').slice(1);

		const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command)!);
		if (!cmd) return;

		if (!cmd.options.enabled && !client.constants.DEVELOPERS.includes(message.author.id)) {
			const { code } = new MessageEmbed()
				.setColor(client.constants.COLORS.VIOLET)
				.setTitle('Command Disabled')
				.setDescription('This command was disabled by the developer. If you believe this is an error, please contact the developer.')
				.setTimestamp();
			return await message.channel.createMessage({ embed: code });
		}

		if (cmd.options.development && !client.constants.DEVELOPERS.includes(message.author.id)) {
			const { code } = new MessageEmbed()
				.setColor(client.constants.COLORS.DARK_BLUE)
				.setTitle('Developer Command')
				.setDescription('This command is only useable by the developer. If you believe this is an error, please contact the developer.')
				.setTimestamp();
			return await message.channel.createMessage({ embed: code });
		}

		const ctx = {
			args,
			guild: message.channel.guild,
			channel: message.channel,
			member: message.member,
			message: message
		};

		await cmd.run(client, ctx).catch(async (e) => {
			client.console.error(`[Command "${cmd.name}" Error] ${e.name} ${e.message}`);
			const key = uuid(),
				logEmbed = new MessageEmbed()
					.setColor(client.constants.COLORS.RED)
					.setAuthor(`${ctx.guild.name} - ${ctx.guild.id}`, ctx.guild.dynamicIconURL(undefined, 128))
					.setTitle(`Command Error - ${cmd.name}`)
					.setDescription(client.constants.DISCORD.CODE_BLOCK(inspect(e).slice(0, 2000), 'js'))
					.addField('Key', key)
					.setFooter(`${message.author.username}#${message.author.discriminator} - ${message.author.id}`, message.author.dynamicAvatarURL(undefined, 128))
					.setTimestamp(),
				errorEmbed = new MessageEmbed()
					.setColor(client.constants.COLORS.RED)
					.setTitle('Command Error')
					.setDescription('There was an error while executing the command, please contact the developer with the following key.')
					.addField('Key', client.constants.DISCORD.BOLD(key))
					.setTimestamp();
			await message.channel.createMessage({ embed: errorEmbed.code }).catch(() => undefined);
			await client.createMessage(client.constants.CHANNELS.ERRORS, { embed: logEmbed.code });
		});
	}
}