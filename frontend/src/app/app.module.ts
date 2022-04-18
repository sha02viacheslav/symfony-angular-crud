import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared';

import { AppComponent } from './app.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

import { ErrorInterceptor, HeaderInterceptor } from '@interceptors';

@NgModule({
    declarations: [AppComponent, OrderListComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            preventDuplicates: true,
            positionClass: 'toast-bottom-right',
            closeButton: true,
            tapToDismiss: false,
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
