import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { map, catchError, switchMap, concatMap, flatMap, mergeMap, combineLatest } from 'rxjs/operators';
import { of, forkJoin, Observable }  from 'rxjs';
import { AirqualityData } from '../models/Airquality.model';

@Injectable()
export class AirqualityQueryService {
  
  public airqualityAPI = 'http://ogd.zueriluft.ch/api/v1/h1.csv';
  
  constructor(private http: HttpService) {  }
  
  getAirquality(): Observable<AirqualityData> {
    return this.http.get<any>(this.airqualityAPI)
    .pipe(
      map((doc):AirqualityData => {
        const data = doc.data.split("\r\n");
        data.pop();
        
        const dataArray: string[] = data.pop()
        .replace(' ', '')
        .split(';');

        return {
          timestamp: dataArray[0],
          ozon: +dataArray[1],
          stickstoffdioxid: +dataArray[2],
          feinstaub: +dataArray[3],
          lufttemperatur: +dataArray[4],
          luftdruck: +dataArray[5],
          windrichtung: +dataArray[6],
          windgeschwindigkeit: +dataArray[7]
        } || null;
    }));
  }
}