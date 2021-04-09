import { Injectable, NotFoundException } from '@nestjs/common';
import EmployerEntity from '../db/employer.entity';
import ProjectEntity from '../db/project.entity';
import CreateProjectDTO from '../dto/create-project.dto';
import DeleteProjectDTO from '../dto/delete-project.dto';
import UpdateProjectDTO from '../dto/update-project.dto';

@Injectable()
export class ProjectService {
  async getProject(pID: number): Promise<ProjectEntity> {
    return await ProjectEntity.findOne({ where: { id: pID } });
  }

  async insert(pInfo: CreateProjectDTO): Promise<ProjectEntity> {
    const project = ProjectEntity.create();
    Object.keys(pInfo).forEach((key) => {
      project[key] = pInfo[key];
    });
    project.submissionDate = new Date();
    project.submitter = await EmployerEntity.findOne(pInfo.eid);
    if (project.submitter == null)
      throw new NotFoundException('employer not found');
    await ProjectEntity.save(project);
    return project;
  }

  async edit(pInfo: UpdateProjectDTO): Promise<ProjectEntity> {
    const project = await ProjectEntity.findOne(pInfo.id);
    if (project == null) throw new NotFoundException('project not found');
    Object.keys(pInfo)
      .filter((f) => f != 'id')
      .forEach((key) => {
        project[key] = pInfo[key];
      });
    await ProjectEntity.save(project);
    return project;
  }

  async delete(pInfo: DeleteProjectDTO): Promise<number> {
    const project = await ProjectEntity.findOne(pInfo.id);
    if (project == null) throw new NotFoundException('project not found');
    await ProjectEntity.delete(project);
    return project.id;
  }
}
