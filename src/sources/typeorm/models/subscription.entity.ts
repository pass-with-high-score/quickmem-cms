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
import { SubscriptionTypeEnum } from '../enums/subscription.enum.js';
import { Users } from './user.entity.js';

@Entity('subscriptions')
export class Subscriptions extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Users, (user) => user.subscriptions)
  public user: Relation<Users>;

  @Column({ type: 'boolean', default: false })
  public isTrial: boolean;

  @Column({
    type: 'enum',
    enum: SubscriptionTypeEnum,
    nullable: true,
    enumName: 'trial_for_type_enum',
  })
  public trialForType: string;

  @Column({
    type: 'enum',
    enum: SubscriptionTypeEnum,
    default: SubscriptionTypeEnum.FREE_TRIAL,
    enumName: 'subscription_type_enum',
  })
  public subscriptionType: SubscriptionTypeEnum;

  @Column({ type: 'date', nullable: true })
  public startDate?: Date;

  @Column({ type: 'date', nullable: true })
  public endDate?: Date;

  @Column({ default: false })
  public isActive: boolean;

  @Column({ default: true })
  public isAutoRenew: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
