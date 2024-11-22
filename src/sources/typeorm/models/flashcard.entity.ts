import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { StudySets } from './study-set.entity.js';
import { FlashcardStatusEnum } from '../enums/flashcard-status.enum.js';
import { FlipFlashcardStatus } from '../enums/flip-flashcard-status.js';
import { QuizFlashcardStatusEnum } from '../enums/quiz-flashcard-status.enum.js';
import { Images } from './image.entity.js';

@Entity('flashcards')
export class Flashcards extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public term: string;

  @Column()
  public definition: string;

  @Column({ nullable: true })
  public definitionImageURL: string;

  @Column({ type: 'boolean', default: false })
  public isStarred: boolean;

  @Column({ nullable: true })
  public hint: string;

  @Column({ nullable: true })
  public explanation: string;

  @ManyToOne(() => StudySets, (studySet) => studySet.flashcards, {
    onDelete: 'CASCADE',
  })
  public studySet: Relation<StudySets>;

  @Column({
    type: 'enum',
    enumName: 'flashcard_status_enum',
    enum: FlashcardStatusEnum,
    default: FlashcardStatusEnum.NOT_STUDIED,
  })
  public rating: FlashcardStatusEnum;
  @Column({
    type: 'enum',
    enumName: 'flip_flashcard_status_enum',
    enum: FlipFlashcardStatus,
    default: FlipFlashcardStatus.NONE,
  })
  public flipStatus: FlipFlashcardStatus;

  @Column({
    type: 'enum',
    enumName: 'quiz_flashcard_status_enum',
    enum: QuizFlashcardStatusEnum,
    default: QuizFlashcardStatusEnum.NONE,
  })
  public quizStatus: QuizFlashcardStatusEnum;

  @OneToOne(() => Images, (image) => image.flashcard, {
    onDelete: 'SET NULL',
  })
  public image: Images;

  @Column()
  @RelationId((flashcard: Flashcards) => flashcard.studySet)
  public studySetId: string;

  @Column({ nullable: true, default: false })
  isAIGenerated: boolean;
  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
