import Server from './structs/Client';
import { TOKEN } from './Constants';
import { join } from 'path';

const Client = new Server(TOKEN, {
	restMode: true,
	defaultImageFormat: 'png',
	defaultImageSize: 256,
	messageLimit: 300,
});

Client.loadDirectory(join(Client.constants.FILE_DIRS.ROOT(), 'commands'))
	.reloadEvents()
	.connect();