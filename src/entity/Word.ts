import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
  voice: string;
}
