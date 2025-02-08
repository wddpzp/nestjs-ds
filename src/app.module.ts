import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DsModule } from './ds/ds.module';

@Module({
  imports: [DsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
