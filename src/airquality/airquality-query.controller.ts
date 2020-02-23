import { Controller, Get, Param } from '@nestjs/common';
import { AirqualityQueryService } from './airquality-query.service';

@Controller('')
export class AirqualityQueryController {

    constructor(private queryService: AirqualityQueryService) {  }

    @Get('airquality')
    GetAirquality() {
        return this.queryService.getAirquality();
    }

}