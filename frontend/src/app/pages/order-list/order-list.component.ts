import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResizeableComponent } from '@base-components';
import { OrderStatus } from '@enums';
import { Order } from '@models';
import { OrderService, ResizeService } from '@services';
import { ConfirmComponent } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent extends ResizeableComponent implements OnInit {
    readonly OrderStatus = OrderStatus;

    isLoading = true;
    tableColumns = [];
    tableValue = [];
    rows = 10;
    totalCount = 0;
    termSearch = '';

    constructor(
        private dialogService: DialogService,
        private orderService: OrderService,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService,
        protected resizeService: ResizeService,
    ) {
        super(resizeService);
    }

    ngOnInit(): void {
        this.tableColumns = [
            {
                field: 'id',
                header: 'ID',
                width: 7,
            },
            {
                field: 'date',
                header: 'Date',
                width: 9,
            },
            {
                field: 'customer',
                header: 'Customer',
                width: 10,
            },
            {
                field: 'address1',
                header: 'Address',
                width: 10,
            },
            {
                field: 'city',
                header: 'City',
                width: 9,
            },
            {
                field: 'postcode',
                header: 'Postcode',
                width: 9,
            },
            {
                field: 'country',
                header: 'Country',
                width: 9,
            },
            {
                field: 'amount',
                header: 'Amount',
                width: 8,
            },
            this.resizeService.isMobile()
                ? null
                : {
                      field: 'status',
                      header: 'Status',
                      width: 10,
                  },
            {
                field: 'lastModified',
                header: 'Last Modified',
                width: 11,
            },
            this.resizeService.isMobile()
                ? null
                : {
                      field: 'actions',
                      header: 'Action',
                      width: 8,
                  },
        ].filter(Boolean);

        this.getData();
    }

    getData(event = null): void {
        const queryParams = {
            page: 1,
            per_page: this.rows,
            query: this.termSearch,
        };
        if (event) {
            queryParams.page = event.first / event.rows + 1;
        }
        this.getOrders(queryParams);
    }

    getOrders(queryParams: any) {
        this.isLoading = true;
        this.orderService.getOrders(queryParams).subscribe(
            (data: any) => {
                if (data.success) {
                    this.tableValue = data.result;
                    this.totalCount = data.result_info?.total_count;
                } else {
                    this.toastrService.error('Error while getting the orders!');
                }
                this.isLoading = false;
            },
            (err) => {
                this.toastrService.error('Error while getting the orders!');
            },
        );
    }

    cancelOrder(data: Order) {
        this.dialogService
            .open(ConfirmComponent, {
                data: {
                    type: 'delete',
                    title: 'Are you sure you want to cancel this order?',
                },
            })
            .onClose.subscribe((action: any) => {
                if (action === 'yes') {
                    this.orderService.updateStatus(data.id, OrderStatus.CANCELLED).subscribe(
                        (res) => {
                            if (res.success) {
                                this.toastrService.success('Order cancelled successfully');
                                this.getData();
                            } else {
                                this.toastrService.error('Error while cancelling the order');
                            }
                        },
                        (err) => {
                            this.toastrService.error('Error while cancelling the order');
                        },
                    );
                }
            });
    }
}
