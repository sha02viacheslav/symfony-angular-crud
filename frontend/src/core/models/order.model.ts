import { OrderStatus } from '../enums/order';

export interface Order {
    id: number;
    date: string;
    customer: string;
    address1: string;
    city: string;
    postcode: string;
    country: string;
    amount: number;
    status: OrderStatus;
    lastModified: string;
}
