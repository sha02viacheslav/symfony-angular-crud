import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
    logoutAll: boolean;
    constructor(private ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        this.config.showHeader = false;
        this.config.styleClass = `confirm-dialog ${this.config.data.type}`;
    }

    ngOnInit(): void {}

    close(value = null) {
        this.ref.close(value);
    }
}
