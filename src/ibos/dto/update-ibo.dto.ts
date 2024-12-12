import { PartialType } from '@nestjs/mapped-types';
import { CreateIboDto } from './create-ibo.dto';

export class UpdateIboDto extends PartialType(CreateIboDto) {}
