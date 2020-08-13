import Event from '../structs/Event';
import Server from '../structs/Client';

export default class ReadyEvent extends Event {
	constructor() {
		super('ready');
	}

	async execute(client: Server) {
		client.console.info('[Gateway] Client connected to the gateway successfully.');
		client.console.info(`[Client] Serving ${client.guilds.size} guilds.`);
		client.console.info(`[Client] Serving ${client.users.size} users.`);
	}
}