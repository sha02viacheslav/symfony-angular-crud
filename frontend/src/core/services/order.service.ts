import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { OrderStatus } from '@enums';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private http: HttpClient) {}

    protected serializeParams(obj: object): string {
        const str = [];
        for (const prop in obj) {
            if (
                obj.hasOwnProperty(prop) &&
                !_.isNull(obj[prop]) &&
                !_.isUndefined(obj[prop]) &&
                !(_.isArray(obj[prop]) && _.isEmpty(obj[prop])) &&
                obj[prop] !== undefined &&
                obj[prop] !== ''
            ) {
                str.push(
                    encodeURIComponent(prop) +
                        '=' +
                        encodeURIComponent(_.isArray(obj[prop]) ? obj[prop].join(',') : obj[prop]),
                );
            }
        }
        return str.join('&');
    }

    getOrders(params) {
        return this.http.get<any>(`orders/getOrders?${this.serializeParams(params)}`);
    }

    updateStatus(orderId: number, status: OrderStatus) {
        return this.http.post<any>(`orders/changeStatus/${orderId}`, status);
    }
}
