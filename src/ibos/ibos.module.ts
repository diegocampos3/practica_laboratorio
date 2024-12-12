import { Module } from '@nestjs/common';
import { IbosService } from './ibos.service';
import { IbosController } from './ibos.controller';

@Module({
  controllers: [IbosController],
  providers: [IbosService],
})
export class IbosModule {}
