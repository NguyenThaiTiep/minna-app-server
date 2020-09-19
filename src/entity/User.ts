import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Unit } from "./Unit";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  age: number;
}
