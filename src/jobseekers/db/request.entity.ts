import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EmployeeEntity from './employee.entity';
import ProjectEntity from './project.entity';

@Entity()
export default class RequestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requestedDate: Date;

  @ManyToOne((type) => ProjectEntity, (project) => project.requested)
  project: ProjectEntity;

  @ManyToOne((type) => EmployeeEntity, (employee) => employee.requested)
  employee: EmployeeEntity;
}
