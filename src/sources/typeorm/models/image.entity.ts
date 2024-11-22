import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Relation,
  BaseEntity,
  RelationId,
} from 'typeorm';
import { Flashcards } from './flashcard.entity.js';

@Entity('flashcard_images')
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public url: string;

  @OneToOne(() => Flashcards, (flashcard) => flashcard.image, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'flashcard',
  })
  public flashcard: Relation<Flashcards>;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
