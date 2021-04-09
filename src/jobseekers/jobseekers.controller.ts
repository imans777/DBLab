import { Controller } from '@nestjs/common';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {
  public constructor(private readonly jsService: JobseekersService) {}
}
