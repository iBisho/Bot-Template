import Server from './Client';
import { Command as TCommand } from '../../types';

export default class Command {
	name: string;
	run: (client: Server, ctx: TCommand.Context) => Promise<unknown>;
	options: TCommand.Options;
	constructor(name: string, run: (client: Server, ctx: TCommand.Context) => Promise<unknown>, options?: Partial<TCommand.Options>) {
		this.name = name;
		this.run = run;
		this.options = Object.assign({
			description: 'Not specified.',
			usage: 'Not specified.',
			category: 'Unsorted',
			enabled: true,
			aliases: [],
			development: false,
		}, options);
	}
}