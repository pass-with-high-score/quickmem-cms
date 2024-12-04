import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

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
}
