import { PartialType } from '@nestjs/mapped-types';
import { CreateArticulosPedidoDto } from './create-articulos-pedido.dto';

export class UpdateArticulosPedidoDto extends PartialType(CreateArticulosPedidoDto) {}
