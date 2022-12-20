import { Column, PrimaryColumn,CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, Entity } from "typeorm";
import { User } from "../user/users.model";
@Entity('auth')
export class auth {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToOne(()=> User, (user)=>user.id)
    userId:number;

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}