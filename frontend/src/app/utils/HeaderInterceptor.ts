import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,

} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        try {
            let commonEndpoint = environment.api;
            let dummyrequest = req.clone({
                url: commonEndpoint + req.url,
            });
            return next.handle(dummyrequest).pipe(
                catchError(error => {
                    return throwError(error);
                }));
        } catch (error) {
            console.log(error);
        }
    }

}
