import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './user.entity.js';

@Entity('streaks')
export class Streaks extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Users, (user) => user.streaks)
  public user: Relation<Users>;

  @Column()
  @RelationId((streak: Streaks) => streak.user)
  public userId: string;

  @Column()
  public streakCount: number;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
