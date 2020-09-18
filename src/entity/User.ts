import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
