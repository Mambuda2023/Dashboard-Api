import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IUserController } from './users.controller.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRouter([
			{
				path: '/register',
				func: this.register,
				method: 'post',
			},
			{
				path: '/login',
				func: this.login,
				method: 'post',
			},
		]);
	}
	login(req: Request, res: Response, next: NextFunction): void {
		console.log('dfk');
		next(new HTTPError(401, 'Ошибка авторизации', 'Login'));
	}

	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
