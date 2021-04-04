import { Controller, Get } from '@nestjs/common';

import { AuthUser } from '../../shared/decorators/auth-user.decorator';
import { Roles } from '../../shared/decorators/roles.decorators';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get('me')
    @Roles('user', 'premium', 'admin')
    async getMe(@AuthUser() user: JwtPayload): Promise<User> {
        return await this.usersService.findMe(user.id);
    }
}
