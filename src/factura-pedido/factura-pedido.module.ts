import { Module } from '@nestjs/common';
import { FacturaPedidoService } from './factura-pedido.service';
import { FacturaPedidoController } from './factura-pedido.controller';

@Module({
  controllers: [FacturaPedidoController],
  providers: [FacturaPedidoService],
})
export class FacturaPedidoModule {}
