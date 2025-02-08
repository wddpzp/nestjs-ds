import { Module } from '@nestjs/common';
import { DsService } from './ds.service';
import { DsController } from './ds.controller';

@Module({
  controllers: [DsController],
  providers: [DsService],
})
export class DsModule {}
