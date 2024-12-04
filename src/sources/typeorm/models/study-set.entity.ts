import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Flashcards } from './flashcard.entity.js';
import { Users } from './user.entity.js';
import { Classes } from './class.entity.js';
import { Folders } from './folder.entity.js';
import { StudyTimes } from './study-time.entity.js';

@Entity('study_sets')
export class StudySets extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column()
  public description?: string;

  @OneToMany(() => Flashcards, (flashcard) => flashcard.studySet)
  public flashcards: Flashcards[];

  @Column({ type: 'boolean', default: false })
  public isPublic: boolean;

  @ManyToOne(() => Users, (user) => user.studySets)
  public owner: Relation<Users>;

  @ManyToMany(() => Classes, (classs) => classs.studySets)
  @JoinTable({
    name: 'class_study_sets',
    joinColumn: { name: 'study_set_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'class_id', referencedColumnName: 'id' },
  })
  public classes: Classes[];

  @ManyToMany(() => Folders, (folder) => folder.studySets)
  @JoinTable({
    name: 'folder_study_sets',
    joinColumn: { name: 'study_set_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'folder_id', referencedColumnName: 'id' },
  })
  public folders: Folders[];

  @OneToMany(() => StudyTimes, (studyTime) => studyTime.studySet)
  public studyTimes: StudyTimes[];

  @Column()
  @RelationId((studySet: StudySets) => studySet.owner)
  public ownerId: string;

  @Column({ nullable: true })
  public link: string;

  @Column({ nullable: true, default: false })
  public isAIGenerated: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
