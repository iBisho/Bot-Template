import Event from '../structs/Event';
import Server from '../structs/Client';

export default class WarnEvent extends Event {
	constructor() {
		super('warn');
	}

	async execute(client: Server, message: string, id: number) {
		client.console.warn(`[Gateway] [${id}] ${message}`);
	}
}