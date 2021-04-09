import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProjectEntity from './project.entity';

@Entity()
export default class EmployerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250 })
  email: string;

  @Column({ nullable: true })
  credibility: number;

  @OneToMany(() => ProjectEntity, (proj) => proj.submitter)
  projects: ProjectEntity[];
}
