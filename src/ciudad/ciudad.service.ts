import { Injectable } from '@nestjs/common';
import { Ciudad } from './entities/ciudad.entity';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) {}

  create(createCiudadDto: CreateCiudadDto) {
    const ciudad = this.ciudadRepository.create(createCiudadDto);
    return this.ciudadRepository.save(ciudad);
  }

  findAll() {
    return this.ciudadRepository.find();
  }

  findOne(id: string) {
    return this.ciudadRepository.findOne({ where: { id_ciudad: id } });
  }
  

  update(id: string, updateCiudadDto: UpdateCiudadDto) {
    return this.ciudadRepository.update(id, updateCiudadDto);
  }

  remove(id: string) {
    return this.ciudadRepository.delete(id);
  }
}
