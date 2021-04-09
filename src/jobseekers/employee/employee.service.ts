import { Injectable, NotFoundException } from '@nestjs/common';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import EmployeeEntity from '../db/employee.entity';
import ProjectEntity from '../db/project.entity';
import RequestEntity from '../db/request.entity';
import CreateEmployeeDTO from '../dto/create-employee.dto';
import DeleteEmployeeDTO from '../dto/delete-employee.dto';
import DeleteRequestDTO from '../dto/delete-request.dto';
import SubmitRequestDTO from '../dto/submit-request.dto';
import UpdateEmployeeDTO from '../dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  async getEmployee(eID: number): Promise<EmployeeEntity> {
    return await EmployeeEntity.findOne({
      where: {
        id: eID,
      },
    });
  }

  async insert(eInfo: CreateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = EmployeeEntity.create();
    Object.keys(eInfo).forEach((key) => {
      employee[key] = eInfo[key];
    });
    employee.password = await this.hashPassword(eInfo.password);
    await EmployeeEntity.save(employee);
    return employee;
  }

  async edit(eInfo: UpdateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = await EmployeeEntity.findOne(eInfo.id);
    if (employee == null) throw new NotFoundException('employee not found');
    Object.keys(eInfo)
      .filter((f) => f != 'id')
      .forEach((key) => {
        employee[key] = eInfo[key];
      });
    await EmployeeEntity.save(employee);
    return employee;
  }

  async delete(eInfo: DeleteEmployeeDTO): Promise<number> {
    const employee = await EmployeeEntity.findOne(eInfo.id);
    if (employee == null) throw new NotFoundException('employee not found');
    await EmployeeEntity.delete(employee);
    return employee.id;
  }

  async requestForProject(s: SubmitRequestDTO): Promise<RequestEntity> {
    const req = await RequestEntity.create();
    req.employee = await EmployeeEntity.findOne(s.eid);
    req.project = await ProjectEntity.findOne(s.pid);
    if (req.employee == null || req.project == null)
      throw new NotFoundException('employee/project not found');
    req.requestedDate = new Date();
    await RequestEntity.save(req);
    return req;
  }

  async deleteRequest(s: DeleteRequestDTO): Promise<number> {
    const req = await RequestEntity.findOne(s.id);
    if (req == null)
      throw new NotFoundException('employee request for project not found');
    await RequestEntity.delete(req);
    return req.id;
  }

  async hashPassword(pass: string): Promise<string> {
    const iv = randomBytes(16);
    const key = (await promisify(scrypt)(pass, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    return Buffer.from(cipher.final()).toString();
  }
}
