import Server from './Client';

export default abstract class Event {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async execute(_caller: Server, ..._args: unknown[]): Promise<unknown> {
		throw new Error('The event must be executable.');
	}
}
