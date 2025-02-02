import { NextFunction, Request, Response } from 'express'
import { BaseController } from '../common/base.controller'
import { HTTPError } from '../errors/http-error'
import { LoggerService } from '../logger/logger.service'

export class UserController extends BaseController {
	constructor(logger: LoggerService) {
		super(logger)
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
		])
	}
	login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, 'Ошибка авторизации', 'Login'))
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register')
	}
}
