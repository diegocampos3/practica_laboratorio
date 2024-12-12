import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacturaPedidoService } from './factura-pedido.service';
import { CreateFacturaPedidoDto } from './dto/create-factura-pedido.dto';
import { UpdateFacturaPedidoDto } from './dto/update-factura-pedido.dto';

@Controller('factura-pedido')
export class FacturaPedidoController {
  constructor(private readonly facturaPedidoService: FacturaPedidoService) {}

  @Post()
  create(@Body() createFacturaPedidoDto: CreateFacturaPedidoDto) {
    return this.facturaPedidoService.create(createFacturaPedidoDto);
  }

  @Get()
  findAll() {
    return this.facturaPedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturaPedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacturaPedidoDto: UpdateFacturaPedidoDto) {
    return this.facturaPedidoService.update(+id, updateFacturaPedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturaPedidoService.remove(+id);
  }
}
