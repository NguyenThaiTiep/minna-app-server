import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  katakana: string;
  @Column({ nullable: true })
  hiragana: string;

  @Column({ type: "nchar", length: 100, nullable: true })
  romaji: string;
  @Column({ nullable: true })
  voice: string;
}
