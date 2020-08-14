/* eslint-disable @typescript-eslint/no-misused-promises */
import Command from './Command';
import Console from './Console';
import Event from './Event';
import * as Constants from '../Constants';
import { sync } from 'glob';
import { join } from 'path';
import { Client, ClientOptions } from 'eris';
import { FILEDIRS } from '../Constants';

export default class Server extends Client {
	console = Console;
	commands = new Map<string, Command>();
	aliases = new Map<string, string>();
	events = new Map<string, Event>();
	constants = Constants;
	prefix = '#!';
	constructor(token: string, options?: ClientOptions) {
		super(token, options);
	}

	loadDirectory(dirname: string) {
		if (!dirname.endsWith('/')) dirname += '/';
		const pattern = `${dirname}*.[tj]s`;
		const filenames = sync(pattern);
		for (const filename of filenames) {
			delete require.cache[filename];
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			let file = require(filename);
			file = Object.assign(file.default, file);
			delete file.default;
			file.filename = filename;

			const name = filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.'));
			if (dirname.endsWith('events/')) this.events.set(name, new file());
			if (dirname.endsWith('commands/')) this.addCommand(file);
		}

		return this;
	}

	reloadEvents() {
		Array.from(this.events.values()).map((event) => {
			this.off(event.name, event.execute.bind(event, this));
		});

		this.loadDirectory(join(FILEDIRS.ROOT(), 'events'));
		this.loadEvents();

		return this;
	}

	loadEvents() {
		Array.from(this.events.values()).map((event) => {
			this.on(event.name, event.execute.bind(event, this));
		});

		return this;
	}

	private addCommand(command: Command) {
		if (!(command instanceof Command)) throw new TypeError('Not a command.');
		this.commands.set(command.name, command);
		command.options.aliases.forEach((val) => this.aliases.set(val, command.name));

		this.emit('commandLoaded', command);
		return this;
	}
}