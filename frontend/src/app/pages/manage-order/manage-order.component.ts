import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CommonService } from 'src/app/services/common.service';
import { HttpParams } from '@angular/common/http';

declare var $: any

@Component({
    selector: 'app-manage-order',
    templateUrl: './manage-order.component.html',
    styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

    constructor(private $common: CommonService, private $order: OrderService) { }

    @Input() recordList: Array<any> = []

    id: any;
    recordObj: any = {};

    noOfPage: any = 10;
    p = 1;
    searchObj;

    // Filter variable start
    advSearchObj: any;
    filterShow: boolean = false;
    // Filter variable end

    ngOnInit() {
        this.resetFilterData();
    }

    /** Filter Start */
    resetFilterData() {
        this.advSearchObj = {
            "searchText": "",
        };
        this.getOrder('');
    }

    filterData() {
        this.getOrder(this.advSearchObj);
    }

    showHideFilter() {
        this.filterShow = !this.filterShow;
    }
    /** Filter End */

    config: any;
    getOrder(advSearchObj) {
        try {
            let params = new HttpParams();
            if (advSearchObj) {
                if (advSearchObj?.searchText) {
                    params.append('search', advSearchObj.searchText);
                }
            }
            
            this.$order.get(params).subscribe((response: any) => {
                if (response.status == true) {
                    this.recordList = response.object;
                }
            }, err => {
            })
        } catch (error) {
        }
    }

    // change status start
    toggleStatus(data, statusCode) {
        $("#change_status_modal").modal('show');
        this.recordObj = { ...data };
        this.recordObj.currentStatus = statusCode;
    }

    changeStatus(recordObj) {
        try {
            let data = {
                "id": recordObj.id,
                "statusId": recordObj.currentStatus
            }
            
            this.$order.updateStatus(data).subscribe((response: any) => {
                if (response.status == true) {
                    recordObj.status = recordObj.currentStatus;
                    this.getOrder(this.advSearchObj);
                    $("#change_status_modal").modal('hide');
                }
            }, err => {
            })
        } catch (error) {
        }
    }
    // change status end

    // data shorting start
    key: string = 'date';
    reverse: boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    // data shorting end

}
