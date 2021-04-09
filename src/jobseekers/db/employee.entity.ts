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

  @Column({ length: 250 })
  email: string;

  @Column({ nullable: true })
  credibility: number;

  @Column()
  talents: string;

  @Column()
  experiences: string;

  @Column()
  academicInfo: string;

  @OneToMany(() => RequestEntity, (requested) => requested.employee)
  requested: RequestEntity[];
}
