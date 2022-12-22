import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./users.model";

@Entity('users_follow')
export class UsersFollow{
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(()=>User,{nullable:false})
    @JoinColumn({name:'user_from'})
    from:User;
    @ManyToOne(()=>User,{nullable:false})
    @JoinColumn({name:'user_to'})
    to:User;
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;

}