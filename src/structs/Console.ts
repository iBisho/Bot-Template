import { createLogger, format, transports } from 'winston';

export default createLogger({
	level: 'info',
	transports: [
		new transports.Console({
			handleExceptions: true,
			format: format.combine(
				format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
				format.prettyPrint(),
				format.printf(
					(info) => `[${info.level.toUpperCase()} | ${info.timestamp}] ${info.message}`
				),
			),
		}),
		new transports.File({
			filename: 'events.log',
			maxsize: 1e+7,
			format: format.combine(
				format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
				format.prettyPrint(),
				format.printf(
					(info) => `[${info.level.toUpperCase()} | ${info.timestamp}] ${info.message}`
				),
			),
		}),
	],
	exitOnError: false,
});