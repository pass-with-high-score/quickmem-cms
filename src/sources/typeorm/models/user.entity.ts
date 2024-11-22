import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { AuthProviderEnum } from '../enums/auth-provider.enum.js';
import { UserRoleEnum } from '../enums/user-role.enum.js';
import { StudyTimes } from './study-time.entity.js';
import { StudySets } from './study-set.entity.js';
import { Folders } from './folder.entity.js';
import { Classes } from './class.entity.js';
import { Streaks } from './streak.entity.js';
import { Notifications } from './notification.entity.js';
import { Subscriptions } from './subscription.entity.js';
import { Reports } from './report.entity.js';
import { Devices } from './device.entity.js';

@Entity('users')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: string;

  @Column({ unique: true })
  public username: string;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  public fullName: string;

  @Column({ nullable: true })
  public avatarUrl: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    enumName: 'user_role_enum',
    default: UserRoleEnum.STUDENT,
  })
  public role: UserRoleEnum;

  @Column({ type: 'date', nullable: true })
  public birthday?: Date;

  @Column({ default: false, nullable: true })
  public isVerified?: boolean;

  @Column({
    type: 'enum',
    enum: AuthProviderEnum,
    enumName: 'auth_provider_enum',
    default: AuthProviderEnum.EMAIL,
  })
  public provider: AuthProviderEnum;

  @OneToMany(() => StudyTimes, (studyTime) => studyTime.user)
  public studyTimes: StudyTimes[];

  @OneToMany(() => StudySets, (studySet) => studySet.owner)
  public studySets: StudySets[];

  @OneToMany(() => Folders, (folder) => folder.owner)
  public folders: Folders[];

  @OneToMany(() => Classes, (classEntity) => classEntity.owner)
  public ownerClasses: Classes[];

  @Column({ type: 'int', default: 0 })
  public coins: number;

  @OneToMany(() => Streaks, (streak) => streak.user)
  public streaks: Streaks[];

  @OneToMany(() => Notifications, (notification) => notification.user)
  public notifications: Notifications[];

  @OneToMany(() => Subscriptions, (subscription) => subscription.user)
  public subscriptions: Subscriptions[];

  @OneToMany(() => Reports, (report) => report.reporter)
  public reports: Reports[];

  @OneToMany(() => Devices, (device) => device.user)
  public devices: Devices[];

  @ManyToMany(() => Classes, (classEntity) => classEntity.members)
  public classes: Classes[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
