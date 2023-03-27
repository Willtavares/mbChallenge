import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';

@Injectable()
export class RegistrationService {
  private registrations: Registration[] = [];

  create(createRegistrationDto: CreateRegistrationDto) {
    const currentMaxId =
      this.registrations[this.registrations.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const registration = {
      id,
      ...createRegistrationDto,
    };

    this.registrations.push(registration);
    return registration;
  }

  findAll() {
    return this.registrations;
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
