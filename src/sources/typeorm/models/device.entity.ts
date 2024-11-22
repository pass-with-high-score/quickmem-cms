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

@Entity('devices')
export class Devices extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
   public id: string;

  @ManyToOne(() => Users, (user) => user.devices)
   public user: Relation<Users>;

  @Column()
   public deviceToken: string;

  @CreateDateColumn()
   public createdAt: Date;

  @UpdateDateColumn()
   public updatedAt: Date;
}
