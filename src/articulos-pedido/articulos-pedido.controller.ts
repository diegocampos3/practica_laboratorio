import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticulosPedidoService } from './articulos-pedido.service';
import { CreateArticulosPedidoDto } from './dto/create-articulos-pedido.dto';
import { UpdateArticulosPedidoDto } from './dto/update-articulos-pedido.dto';

@Controller('articulos-pedido')
export class ArticulosPedidoController {
  constructor(private readonly articulosPedidoService: ArticulosPedidoService) {}

  @Post()
  create(@Body() createArticulosPedidoDto: CreateArticulosPedidoDto) {
    return this.articulosPedidoService.create(createArticulosPedidoDto);
  }

  @Get()
  findAll() {
    return this.articulosPedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articulosPedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticulosPedidoDto: UpdateArticulosPedidoDto) {
    return this.articulosPedidoService.update(+id, updateArticulosPedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articulosPedidoService.remove(+id);
  }
}
