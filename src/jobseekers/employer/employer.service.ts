import { Injectable, NotFoundException } from '@nestjs/common';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import EmployerEntity from '../db/employer.entity';
import CreateEmployerDTO from '../dto/create-employer.dto';
import DeleteEmployerDTO from '../dto/delete-employer.dto';
import UpdateEmployerDTO from '../dto/update-employer.dto';

@Injectable()
export class EmployerService {
  async getEmployer(eID: number): Promise<EmployerEntity> {
    return await EmployerEntity.findOne({
      where: {
        id: eID,
      },
    });
  }

  async insert(eInfo: CreateEmployerDTO): Promise<EmployerEntity> {
    const employer = EmployerEntity.create();
    Object.keys(eInfo).forEach((key) => {
      employer[key] = eInfo[key];
    });
    employer.password = await this.hashPassword(eInfo.password);
    await EmployerEntity.save(employer);
    return employer;
  }

  async edit(eInfo: UpdateEmployerDTO): Promise<EmployerEntity> {
    const employer = await EmployerEntity.findOne(eInfo.id);
    if (employer == null) throw new NotFoundException('employer not found');
    Object.keys(eInfo)
      .filter((f) => f != 'id')
      .forEach((key) => {
        employer[key] = eInfo[key];
      });
    await EmployerEntity.save(employer);
    return employer;
  }

  async delete(eInfo: DeleteEmployerDTO): Promise<number> {
    const employer = await EmployerEntity.findOne(eInfo.id);
    if (employer == null) throw new NotFoundException('employer not found');
    await EmployerEntity.delete(employer);
    return employer.id;
  }

  async hashPassword(pass: string): Promise<string> {
    const iv = randomBytes(16);
    const key = (await promisify(scrypt)(pass, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    return Buffer.from(cipher.final()).toString();
  }
}
