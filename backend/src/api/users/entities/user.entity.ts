import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../interfaces/user.interface';

@Entity("user")
export class UserEntity implements User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudo: string;

    @Column()
    email: string;

    @Column({ default: true, select: false })
    password: string;

    @Column()
    role: "user" | "premium" | "admin";
}
