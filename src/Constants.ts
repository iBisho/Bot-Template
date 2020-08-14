import { join } from 'path';

export const CHANNELS = {
	ERRORS: 'CHANNEL ID'
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
	DARKBLUE: '#206694'
};

export const FILEDIRS = {
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
	CODEBLOCK: (str: string, lang = '') => ['```' + lang, str, '```'].join('\n')
};

export const DEVELOPERS = ['ID'];

export const REGEXNONUTF = /[^A-Za-z 0-9 .,?""!@#$%^&*()-_=+;:<>/\\|}{[\]`~]*/gmi;
export const ESCAPENONUTF = (str: string) => str.replace(REGEXNONUTF, '');

export const TOKEN = Buffer.from('HEXADECIMAL TOKEN', 'hex').toString('utf8');