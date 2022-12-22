import { Column, PrimaryColumn,CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, Entity, JoinColumn } from "typeorm";
import { User } from "../user/users.model";
@Entity('auth')
export class auth {
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne(()=> User,{nullable:false})
    @JoinColumn()
    user:User;

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}