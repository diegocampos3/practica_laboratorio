import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateIboDto } from './dto/create-ibo.dto';
import { UpdateIboDto } from './dto/update-ibo.dto';
import { IboService } from './ibos.service';

@Controller('ibo')
export class IboController {
  constructor(private readonly iboService: IboService) {}

  @Post()
  create(@Body() createIboDto: CreateIboDto) {
    return this.iboService.create(createIboDto);
  }

  @Get()
  findAll() {
    return this.iboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iboService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIboDto: UpdateIboDto) {
    return this.iboService.update(id, updateIboDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iboService.remove(id);
  }
}
