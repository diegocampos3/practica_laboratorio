import { Injectable } from '@nestjs/common';
import { Ibo } from './entities/ibo.entity';
import { CreateIboDto } from './dto/create-ibo.dto';
import { UpdateIboDto } from './dto/update-ibo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IboService {
  constructor(
    @InjectRepository(Ibo)
    private readonly iboRepository: Repository<Ibo>,
  ) {}

  create(createIboDto: CreateIboDto) {
    const ibo = this.iboRepository.create(createIboDto);
    return this.iboRepository.save(ibo);
  }

  findAll() {
    return this.iboRepository.find();
  }

  findOne(id: string) {
    return this.iboRepository.findOne({ where: { nro_ibo: id } });
  }

  update(id: string, updateIboDto: UpdateIboDto) {
    return this.iboRepository.update(id, updateIboDto);
  }

  remove(id: string) {
    return this.iboRepository.delete(id);
  }
}
