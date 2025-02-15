import { injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from 'tslog';
import { ILogger } from './logger.interface';

@injectable()
export class LoggerService implements ILogger {
	public logger: Logger;

	constructor() {
		this.logger = new Logger({
			displayLoggerName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false,
			displayInstanceName: false,
		});
	}
	log(...args: unknown[]): void {
		this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		this.logger.error(...args);
	}
	warn(...args: unknown[]): void {
		this.logger.warn(...args);
	}
}
