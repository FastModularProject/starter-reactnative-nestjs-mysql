import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '../config/config.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly reflector: Reflector,
        private config: ConfigService) { }

    canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest();

        if (!roles) {
            Logger.log(`${request.route['stack'][0].method} ${request.originalUrl}`);
            return true;
        }

        const token = request.headers['authorization'];

        if (Boolean(token)) {
            try {
                const user = jwt.verify(token, this.config.environment.secretKey);
                const role = user['role'];
                if (roles.includes(role)) {
                    Logger.log(`${request.route['stack'][0].method} ${request.originalUrl} authorized`);
                    request.user = user;
                    return true;
                }
            } catch (err) {
                Logger.log(`${request.route['stack'][0].method} ${request.originalUrl} unauthorized bad token`);
                throw new HttpException({
                    status: HttpStatus.UNAUTHORIZED,
                    error: err,
                }, 401);
            }
        }
        Logger.log(`${request.route['stack'][0].method} ${request.originalUrl} unauthorized no token`);
        return false;
    }
}
