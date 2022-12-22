import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../api/components/user/users.model";

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User,{nullable:false})
    @JoinColumn()
    user: User;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}