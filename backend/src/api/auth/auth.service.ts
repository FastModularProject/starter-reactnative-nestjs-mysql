import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import { ConfigService } from '../../shared/config/config.service';
import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
    private saltRounds = 10;

    constructor(private userService: UsersService,
        private config: ConfigService) { }

    async signUp(user: User): Promise<User> {
        user.password = await bcrypt.hash(user.password, this.saltRounds);
        return await this.userService.create(user);
    }

    async signIn(email: string, password: string): Promise<User> {
        const user = await this.userService.findForAuth(email);
        if (!user) return null;

        const match = await bcrypt.compare(password, user.password);
        if (!match) return null;

        return user;
    }

    async createToken(user: User): Promise<string> {
        const jwtPayload: JwtPayload = { id: user.id, email: user.email, role: user.role };
        return await jwt.sign(jwtPayload, this.config.environment.secretKey, { expiresIn: "365d" });
    }
}
