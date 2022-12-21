import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    address:string;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

}