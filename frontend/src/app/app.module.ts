import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowHidePasswordDirective } from './directive/show-hide-password.directive';
import { ValidateEmailDirective } from './directive/validate-email.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChangeStatusModalComponent } from './modals/change-status-modal/change-status-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import { ShowHypenPipe } from './pipe/show-hypen.pipe';
import { ManageOrderComponent } from './pages/manage-order/manage-order.component';
import { DatePipe } from '@angular/common';
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';
import { Ng2OrderModule } from 'ng2-order-pipe';

import * as $ from "jquery";
import { HeaderInterceptor } from './utils/HeaderInterceptor';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
    optionValueField: 'id',
    optionTextField: 'name',
    keepSelectedItems: false
};

@NgModule({
    declarations: [
        AppComponent,
        ManageOrderComponent,
        ChangeStatusModalComponent,
        ShowHidePasswordDirective,
        ValidateEmailDirective,
        FilterPipe,
        ShowHypenPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        NgxSelectModule.forRoot(CustomSelectOptions),
        Ng2OrderModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true,
        },
        [DatePipe]
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
