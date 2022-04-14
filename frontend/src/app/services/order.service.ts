import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private comm: CommonService, private http: HttpClient) { }

  get(params) {
    return this.http.get<any>(`orders/getOrders`, { params }).pipe(
      map((response: any) => {
        this.comm.parseResponse(response);
        return response;
      })
    );
  }

  importOrder(object) {
    return this.http.post<any>(`orders/importOrder`, object).pipe(
      map((response: any) => {
        this.comm.parseResponse(response);
        return response;
      })
    );
  }

  updateStatus(data) {
    return this.http.post<any>(`orders/changeStatus/`+data.id, data.statusId).pipe(
      map((response: any) => {
        this.comm.parseResponse(response);
        return response;
      })
    );
  }

}
