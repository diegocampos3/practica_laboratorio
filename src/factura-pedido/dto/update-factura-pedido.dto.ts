import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturaPedidoDto } from './create-factura-pedido.dto';

export class UpdateFacturaPedidoDto extends PartialType(CreateFacturaPedidoDto) {}
