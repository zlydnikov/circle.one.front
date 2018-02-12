import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatasetService {

  private sensorsHref = '/assets/data/datasets.json';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get<any[]>(this.sensorsHref);
  }
}
