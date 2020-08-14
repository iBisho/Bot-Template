import { Guild, Member, Message, TextChannel } from 'eris';

export declare namespace Command {
	export type Context = {
		args: string[];
		guild: Guild;
		channel: TextChannel;
		member: Member;
		message: Message;
	}

	export type Options = {
		description: string;
		usage: string;
		category: string;
		enabled: boolean;
		aliases: string[];
		development: boolean;
	}
}