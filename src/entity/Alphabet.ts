import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type alphabetConfig = {
  id?: number;
  katakana?: string;
  hiragana?: string;
  romaji?: string;
  voice?: string;
  KatakanaWrite?: string;
  HiraganaWrite?: string;
  example?: string;
  index?: number;
};
@Entity()
export class Alphabet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  index: number;
  @Column({
    nullable: true,
    type: "nvarchar",
    length: 255,
  })
  katakana: string;
  @Column({
    nullable: true,
    type: "nvarchar",
    length: 255,
  })
  hiragana: string;
  @Column({ nullable: true })
  KatakanaWrite: string;
  @Column({ nullable: true })
  HiraganaWrite: string;
  @Column({ nullable: true })
  example: string;

  @Column({ type: "nvarchar", length: 255, nullable: true })
  romaji: string;
  @Column({ nullable: true })
  voice: string;
}
