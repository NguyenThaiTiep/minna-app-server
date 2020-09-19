import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Word } from "./Word";
export type unitConfig = {
  id?: number;
  index?: number;
  name?: string;
  subject?: string;
  description?: string;
};
@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  index: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  subject: string;

  @Column({ nullable: true })
  description: string;
  @OneToMany((type) => Word, (word) => word.unit, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  words: Word[];
}
