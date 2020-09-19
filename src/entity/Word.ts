import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Unit } from "./Unit";

export type wordConfig = {
  id?: number;
  mean?: string;
  kanji?: string;
  romaji?: string;
  type?: string;
  voice?: string;
  unitId?: number;
  name?: string;
  kanOto?: string;
  index?: number;
};
@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  index: number;
  @Column()
  name: string;
  @Column()
  mean: string;
  @Column({ nullable: true })
  type: string;
  @Column({ nullable: true })
  kanji: string;
  @Column()
  romaji: string;
  @Column({ nullable: true })
  kanOto: string;
  @Column({ nullable: true })
  voice: string;

  @ManyToOne((type) => Unit, (unit) => unit.words, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  unit: Unit;
}
