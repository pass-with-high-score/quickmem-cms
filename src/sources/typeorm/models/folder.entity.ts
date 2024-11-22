import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn, Relation,
  UpdateDateColumn,
} from 'typeorm';
import { Users} from './user.entity.js';
import { Classes } from './class.entity.js';
import { StudySets } from './study-set.entity.js';

@Entity('folders')
export class Folders extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column({ nullable: true })
  public description?: string;

  @Column({ type: 'boolean', default: false })
  public isPublic: boolean;

  @ManyToOne(() => Users, (user) => user.folders)
  public owner: Relation<Users>;

  @Column({ nullable: true })
  public link: string;

  @ManyToMany(() => Classes, (classEntity) => classEntity.folders)
  @JoinTable({
    name: 'class_folders',
    joinColumn: { name: 'folder_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'class_id', referencedColumnName: 'id' },
  })
  public classes: Classes[];

  @ManyToMany(() => StudySets, (studySet) => studySet.folders)
  public studySets: StudySets[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
