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

@Entity('colors')
export class Colors extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  public id: number;

  @Column({ unique: true })
  public name: string;

  @Column({ unique: true })
  public hexValue: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(() => StudySets, (studySet) => studySet.color)
  public studySets: StudySets[];
}
