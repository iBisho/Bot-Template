import { join } from 'path';

export const CHANNELS = {
	ERRORS: '742190968006246492'
};

export const SERVERS = {
	MURDER: '162.248.92.127:27030',
	SCPSF: '74.91.119.154:27014',
	SAXTONHALE: '74.91.113.65:27015',
	MURDERTEST: '192.223.30.248:27015',
	FREAKFORTRESS: '74.91.119.154:27016',
	PROPHUNT: '74.91.113.50:27016',
	ZOMBIEESCAPE: '74.91.124.167:27015'
};

export const COLORS = {
	RED: '#e74c3c',
	BLUE: '#3498db',
	YELLOW: '#f1c40f',
	GREEN: '#2ecc71',
	VIOLET: '#9b59b6',
	ORANGE: '#e67e22',
	BROWN: '#a84300',
	BLURPLE: '#7289da',
	AQUA: '#1abc9c',
	GRAY: '#607d8b',
	DARK_BLUE: '#206694'
};

export const FILE_DIRS = {
	EVENTS: (file: string) => join(__dirname, 'events', file),
	COMMANDS: (file: string) => join(__dirname, 'commands', file),
	STRUCTS: (file: string) => join(__dirname, 'structs', file),
	ROOT: () => __dirname
};

export const DISCORD = {
	BOLD: (str: string) => `**${str}**`,
	ITALIC: (str: string) => `_${str}_`,
	UNDERLINE: (str: string) => `__${str}__`,
	QUOTE: (str: string) => `\`${str}\``,
	CODE_BLOCK: (str: string, lang = '') => ['```' + lang, str, '```'].join('\n')
};

export const REGEX_NON_UTF = /[^A-Za-z 0-9 .,?""!@#$%^&*()-_=+;:<>/\\|}{[\]`~]*/gmi;
export const ESCAPE_NON_UTF = (str: string) => str.replace(REGEX_NON_UTF, '');

export const TOKEN = Buffer.from('4e7a49304e6a637a4d5459774d5463354e6a457a4f4441342e5876446d7a512e5a33386d4645616c69426950724347545864484e33487530676f67', 'hex').toString('utf8');