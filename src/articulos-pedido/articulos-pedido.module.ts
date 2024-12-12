import { Module } from '@nestjs/common';
import { ArticulosPedidoService } from './articulos-pedido.service';
import { ArticulosPedidoController } from './articulos-pedido.controller';

@Module({
  controllers: [ArticulosPedidoController],
  providers: [ArticulosPedidoService],
})
export class ArticulosPedidoModule {}
