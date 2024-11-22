import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { StudySets } from './study-set.entity.js';

@Entity('subjects')
export class Subjects extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @Column({ unique: true })
  public name: string;

  @Column({ nullable: true })
  public description?: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(() => StudySets, (studySet) => studySet.subject)
  public studySets: StudySets[];
}
