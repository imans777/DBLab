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
import CreateEmployeeDTO from '../dto/create-employee.dto';
import SubmitRequestDTO from '../dto/submit-request.dto';
import UpdateEmployeeDTO from '../dto/update-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('jobseekers/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiResponse({ status: 201, description: 'registered successfully' })
  @ApiResponse({ status: 400, description: 'invalid data' })
  @Post()
  postEmployee(@Body() emp: CreateEmployeeDTO) {
    return this.employeeService.insert(emp);
  }

  @ApiResponse({ status: 200, description: 'return employee' })
  @ApiResponse({ status: 404, description: 'employee not found' })
  @Get()
  @ApiQuery({
    name: 'employeeID',
    required: true,
    type: Number,
    description: 'ID of employee',
  })
  getEmployee(@Query('employeeID') employeeID) {
    return this.employeeService.getEmployee(employeeID);
  }

  @ApiResponse({ status: 204, description: 'employee updated successfully' })
  @ApiResponse({ status: 404, description: 'employee not found' })
  @ApiResponse({ status: 409, description: 'conflicting fields' })
  @Put()
  editEmployee(@Body() emp: UpdateEmployeeDTO) {
    return this.employeeService.edit(emp);
  }

  @ApiResponse({ status: 204, description: 'employee removed' })
  @ApiResponse({ status: 404, description: 'employee not found' })
  @Delete()
  @ApiQuery({
    name: 'employeeID',
    required: true,
    type: Number,
    description: 'ID of employee',
  })
  deleteEmployee(@Query('employeeID') employeeID) {
    return this.employeeService.delete(employeeID);
  }

  @ApiResponse({ status: 204, description: 'request submitted successfully' })
  @ApiResponse({ status: 400, description: 'invalid rqeuest' })
  @Post('request')
  submitRequest(@Body() req: SubmitRequestDTO) {
    return this.employeeService.requestForProject(req);
  }

  @ApiResponse({ status: 204, description: 'request deleted successfully' })
  @ApiResponse({ status: 404, description: 'request not found' })
  @Delete('request')
  @ApiQuery({
    name: 'requestID',
    required: true,
    type: Number,
    description: 'ID of request',
  })
  deleteRequest(@Query('requestID') requestID) {
    return this.employeeService.deleteRequest(requestID);
  }
}
