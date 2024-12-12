import { Module } from '@nestjs/common';
import { DataAccessModule } from './data-access/data-access.module';
import { IbosModule } from './ibos/ibos.module';
import { CiudadModule } from './ciudad/ciudad.module';
import { EstadoModule } from './estado/estado.module';
import { PedidoModule } from './pedido/pedido.module';
import { ArticulosModule } from './articulos/articulos.module';
import { FacturaPedidoModule } from './factura-pedido/factura-pedido.module';
import { MetodoPagoModule } from './metodo_pago/metodo_pago.module';
import { ArticulosPedidoModule } from './articulos-pedido/articulos-pedido.module';


@Module({
  imports: [DataAccessModule, IbosModule, CiudadModule, EstadoModule, PedidoModule, ArticulosModule, FacturaPedidoModule, MetodoPagoModule, ArticulosPedidoModule],
  
})
export class AppModule {}
