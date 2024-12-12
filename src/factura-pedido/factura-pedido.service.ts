import { Injectable } from '@nestjs/common';
import { CreateFacturaPedidoDto } from './dto/create-factura-pedido.dto';
import { UpdateFacturaPedidoDto } from './dto/update-factura-pedido.dto';

@Injectable()
export class FacturaPedidoService {
  create(createFacturaPedidoDto: CreateFacturaPedidoDto) {
    return 'This action adds a new facturaPedido';
  }

  findAll() {
    return `This action returns all facturaPedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facturaPedido`;
  }

  update(id: number, updateFacturaPedidoDto: UpdateFacturaPedidoDto) {
    return `This action updates a #${id} facturaPedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturaPedido`;
  }
}
