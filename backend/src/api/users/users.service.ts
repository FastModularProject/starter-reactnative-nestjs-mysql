import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    async create(user: User): Promise<User> {
        const userEntity = new UserEntity();

        userEntity.pseudo = user.pseudo;
        userEntity.password = user.password;
        userEntity.email = user.email;
        userEntity.role = "user";

        let userCreated = await this.userRepository.save(userEntity);
        delete userCreated.password;
        return userCreated;
    }

    async findForAuth(email: string): Promise<User> {
        return await this.userRepository
            .createQueryBuilder("user")
            .select([
                "user.password",
                "user.email",
                "user.id",
                "user.role"
            ])
            .where("user.email = :email", { email: email })
            .getOne();
    }

    async findOne(user: User): Promise<User> {
        return await this.userRepository.findOne(user);
    }

    async findMe(userId): Promise<User> {
        return await this.userRepository
            .createQueryBuilder("user")
            .select([
                "user.id",
                "user.email",
                "user.role",
                "user.pseudo"
            ])
            .where("user.id = :userId", { userId })
            .getOne();
    }
}
