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
import { Users } from './user.entity.js';

@Entity('notifications')
export class Notifications extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Users, (user) => user.notifications)
  public user: Relation<Users>;

  @Column()
  public title: string;

  @Column()
  public message: string;

  @Column({ type: 'boolean', default: false })
  public isRead: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
