import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirqualityQueryModule } from './airquality/airquality-query.module';

@Module({
  imports: [AirqualityQueryModule],

})
export class AppModule {}
