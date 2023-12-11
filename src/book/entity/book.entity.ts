import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Book"})
export class BookEntity{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    price:number
}