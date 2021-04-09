import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import CreateProjectDTO from '../dto/create-project.dto';
import UpdateProjectDTO from '../dto/update-project.dto';
import { ProjectService } from './project.service';

@Controller('jobseekers/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiResponse({ status: 201, description: 'registered successfully' })
  @ApiResponse({ status: 400, description: 'invalid data' })
  @Post()
  postProject(@Body() emp: CreateProjectDTO) {
    return this.projectService.insert(emp);
  }

  @ApiResponse({ status: 200, description: 'return project' })
  @ApiResponse({ status: 404, description: 'project not found' })
  @Get()
  @ApiQuery({
    name: 'projectID',
    required: true,
    type: Number,
    description: 'ID of project',
  })
  getProject(@Query('projectID') projectID) {
    return this.projectService.getProject(projectID);
  }

  @ApiResponse({ status: 204, description: 'project updated successfully' })
  @ApiResponse({ status: 404, description: 'project not found' })
  @ApiResponse({ status: 409, description: 'conflicting fields' })
  @Put()
  editProject(@Body() emp: UpdateProjectDTO) {
    return this.projectService.edit(emp);
  }

  @ApiResponse({ status: 204, description: 'project removed' })
  @ApiResponse({ status: 404, description: 'project not found' })
  @Delete()
  @ApiQuery({
    name: 'projectID',
    required: true,
    type: Number,
    description: 'ID of project',
  })
  deleteProject(@Query('projectID') projectID) {
    return this.projectService.delete(projectID);
  }
}
