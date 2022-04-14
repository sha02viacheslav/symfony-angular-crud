import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private http: HttpClient, private spinner: NgxSpinnerService, private datePipe: DatePipe) { }

    settimeout: any;

    cleartimeout() {
        clearTimeout(this.settimeout);
    }

    removeToast(snackbar = null) {
        if (!snackbar) {
            snackbar = document.getElementById("snackbar_module");
        }
        this.settimeout = setTimeout(() => {
            snackbar.style.animation = "fadeOut 5000s linear";
            setTimeout(() => {
                snackbar.style.display = "none";
            }, 300);
        }, 3500);
    }

    parseResponse(response) {
        if (response.status === false) {
        }
    }
    showLoader() {
        this.spinner.show();
    }
    hideLoader() {
        this.spinner.hide();
    }

    uploadImages(file) {

        let form_data = new FormData();
        form_data.append(`FormSupportDocDTO`, "{}");
        form_data.append(`docFile`, file);

        return this.http.post("formSupportDoc/createOrUpdate", form_data);
    }
    getCurrentTimeStamp() {
        return this.datePipe.transform(new Date(), 'yyyyMMdd_HHmmss');
    }
    updateMaxDate(fromDate) {
        let toDate = new Date(fromDate)
        toDate.setDate(toDate.getDate() + 30);
        return this.datePipe.transform(toDate, "yyyy-MM-dd");
    }
    setDate(date) {
        let changeDate = new Date(date)
        return this.datePipe.transform(changeDate, "yyyy-MM-dd");
    }
}
