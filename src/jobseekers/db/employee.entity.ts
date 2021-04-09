import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import RequestEntity from './request.entity';

@Entity()
export default class EmployeeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 1000 })
  password: string;

  @Column({ nullable: true })
  credibility: number;

  @Column({ nullable: true })
  talents: string;

  @Column({ nullable: true })
  experiences: string;

  @Column({ nullable: true })
  academicInfo: string;

  @OneToMany(() => RequestEntity, (requested) => requested.employee)
  requested: RequestEntity[];
}
