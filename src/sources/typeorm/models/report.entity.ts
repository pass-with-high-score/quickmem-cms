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
import { ReportStatusEnum } from '../enums/report-status.enum.js';
import { ReportEnum } from '../enums/report.enum.js';
import { Users } from './user.entity.js';

@Entity('reports')
export class Reports extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public reason: string;

  @Column({
    type: 'enum',
    enum: ReportStatusEnum,
    enumName: 'report_status',
    default: ReportStatusEnum.PENDING,
  })
  public status: ReportStatusEnum;

  @Column({ type: 'enum', enum: ReportEnum, enumName: 'report_enum' })
  public reportedType: ReportEnum;

  @Column({ nullable: true })
  public reportedEntityId: string;

  @ManyToOne(() => Users, (user) => user.reports)
  public reporter: Relation<Users>;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
