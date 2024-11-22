import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { LearnModeEnum } from '../enums/learn-mode.enum.js';
import { Users } from './user.entity.js';
import { StudySets } from './study-set.entity.js';

@Entity('study_time')
export class StudyTimes extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Users, (user) => user.studyTimes)
  public user: Relation<Users>;

  @ManyToOne(() => StudySets, (studySet) => studySet.studyTimes)
  public studySet: Relation<StudySets>;

  @Column('int')
  public timeSpent: number;

  @Column({
    type: 'enum',
    enum: LearnModeEnum,
    nullable: true,
  })
  public learnMode: LearnModeEnum;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
