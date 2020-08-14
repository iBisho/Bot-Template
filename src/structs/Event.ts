/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Server from './Client';

export default abstract class Event {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	execute(_caller: Server, ..._args: unknown[]): Promise<unknown> | unknown {
		throw new Error('The event must be executable.');
	}
}
