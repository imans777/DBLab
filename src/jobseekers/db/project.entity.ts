import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EmployerEntity from './employer.entity';
import RequestEntity from './request.entity';

@Entity()
export default class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column({ length: 2500 })
  description: string;

  @Column()
  deadline: Date;

  @Column()
  budget: number;

  @Column({ nullable: true, length: 500 })
  attachedFileLink: string;

  @Column()
  talentGuarantee: number;

  @Column({ nullable: true })
  requiredTalents: string;

  @Column()
  submissionDate: Date;

  @ManyToOne(() => EmployerEntity, (employer) => employer.projects)
  submitter: EmployerEntity;

  @OneToMany(() => RequestEntity, (request) => request.project)
  requested: RequestEntity[];
}
