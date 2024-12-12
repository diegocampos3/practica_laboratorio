import { Injectable } from '@nestjs/common';
import { CreateArticulosPedidoDto } from './dto/create-articulos-pedido.dto';
import { UpdateArticulosPedidoDto } from './dto/update-articulos-pedido.dto';

@Injectable()
export class ArticulosPedidoService {
  create(createArticulosPedidoDto: CreateArticulosPedidoDto) {
    return 'This action adds a new articulosPedido';
  }

  findAll() {
    return `This action returns all articulosPedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articulosPedido`;
  }

  update(id: number, updateArticulosPedidoDto: UpdateArticulosPedidoDto) {
    return `This action updates a #${id} articulosPedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} articulosPedido`;
  }
}
