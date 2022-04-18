import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        try {
            const newRequest = req.clone({ url: environment.apiURL + req.url });

            return next.handle(newRequest).pipe(
                catchError((error) => {
                    return throwError(error);
                }),
            );
        } catch (error) {
            console.log(error);
        }
    }
}
