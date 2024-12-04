import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

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
}
