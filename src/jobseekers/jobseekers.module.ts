import { Module } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';
import { JobseekersController } from './jobseekers.controller';
import { ProjectModule } from './project/project.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployerModule } from './employer/employer.module';

@Module({
  providers: [JobseekersService],
  controllers: [JobseekersController],
  imports: [ProjectModule, EmployeeModule, EmployerModule],
})
export class JobseekersModule {}
