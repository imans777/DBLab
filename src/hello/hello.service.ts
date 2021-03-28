import { Injectable } from '@nestjs/common';
import { PersonDTO } from './dto/person.dto';

@Injectable()
export class HelloService {
  async welcome(person: PersonDTO): Promise<string> {
    const msg = `Welcome ${person.name}!`;
    console.log(msg);
    return msg;
  }
}
