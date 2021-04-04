import { IsEmail, IsNotEmpty } from 'class-validator';

export class SigninUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}