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
import CreateEmployerDTO from '../dto/create-employer.dto';
import UpdateEmployerDTO from '../dto/update-employer.dto';
import { EmployerService } from './employer.service';

@Controller('jobseekers/employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @ApiResponse({ status: 201, description: 'registered successfully' })
  @ApiResponse({ status: 400, description: 'invalid data' })
  @Post()
  postEmployer(@Body() emp: CreateEmployerDTO) {
    return this.employerService.insert(emp);
  }

  @ApiResponse({ status: 200, description: 'return employer' })
  @ApiResponse({ status: 404, description: 'employer not found' })
  @Get()
  @ApiQuery({
    name: 'employerID',
    required: true,
    type: Number,
    description: 'ID of employer',
  })
  getEmployer(@Query('employerID') employerID) {
    return this.employerService.getEmployer(employerID);
  }

  @ApiResponse({ status: 204, description: 'employer updated successfully' })
  @ApiResponse({ status: 404, description: 'employer not found' })
  @ApiResponse({ status: 409, description: 'conflicting fields' })
  @Put()
  editEmployer(@Body() emp: UpdateEmployerDTO) {
    return this.employerService.edit(emp);
  }

  @ApiResponse({ status: 204, description: 'employer removed' })
  @ApiResponse({ status: 404, description: 'employer not found' })
  @Delete()
  @ApiQuery({
    name: 'employerID',
    required: true,
    type: Number,
    description: 'ID of employer',
  })
  deleteEmployer(@Query('employerID') employerID) {
    return this.employerService.delete(employerID);
  }
}
