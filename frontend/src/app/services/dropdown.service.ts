import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class DropdownService {
    status: any = {};
    statusList: { status: string; }[];
    constructor(private http: HttpClient,private comm: CommonService) { }

    getCodeRoles() {
        return this.http.get<any>(`dropdown/roles`).pipe(
            map((response: any) => {
                this.comm.parseResponse(response);
                return response;
            })
        );
    }

    getStatusDropdown() {
        return this.statusList = [
            {
                "status": "success"
            },
            {
                "status": "Pending"
            },
            {
                "status": "failure"
            }
        ]
    }

}
