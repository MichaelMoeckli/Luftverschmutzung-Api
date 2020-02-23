import { Module, HttpModule } from '@nestjs/common';
import { AirqualityQueryService } from './airquality-query.service';
import { AirqualityQueryController } from './airquality-query.controller';


@Module({
  imports: [HttpModule],
  controllers: 
    [AirqualityQueryController],
  providers: 
    [AirqualityQueryService]
})
export class AirqualityQueryModule {}
