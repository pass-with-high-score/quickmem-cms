import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './user.entity.js';
import { Folders } from './folder.entity.js';
import { StudySets } from './study-set.entity.js';

@Entity('classes')
export class Classes extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column({ nullable: true })
  public description?: string;

  @Column({ type: 'boolean', default: true })
  public allowSetManagement: boolean;

  @Column({ type: 'boolean', default: true })
  public allowMemberManagement: boolean;

  @ManyToOne(() => Users, (user) => user.ownerClasses)
  @RelationId((classes: Classes) => classes.owner)
  public owner: Relation<Users>;

  @ManyToMany(() => Folders, (folder) => folder.classes, {
    onDelete: 'CASCADE',
  })
  public folders: Folders[];

  @ManyToMany(() => StudySets, (studySet) => studySet.classes, {
    onDelete: 'CASCADE',
  })
  public studySets: StudySets[];

  @ManyToMany(() => Users, (user) => user.classes, {
    cascade: true,
  })
  @JoinTable({
    name: 'class_members',
    joinColumn: { name: 'class_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  public members: Users[];

  @Column()
  @RelationId((classes: Classes) => classes.owner)
  public ownerId: string;

  @Column()
  public joinToken: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
