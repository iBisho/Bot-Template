import Event from '../structs/Event';
import Server from '../structs/Client';

export default class ErrorEvent extends Event {
	constructor() {
		super('error');
	}

	execute(client: Server, err: Error, id: number) {
		client.console.error(`[Gateway] [${id}] ${err.name} ${err.message}.`);
	}
}