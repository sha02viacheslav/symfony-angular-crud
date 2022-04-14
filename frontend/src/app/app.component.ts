import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CommonService } from './services/common.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Order App';

    storedTheme: string;
    tokenPayload;
    constructor(private $common: CommonService,
        // private $messaging: MessagingService,
        private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        let _this = this;
        this.setTitle();
    }

    favIcon: HTMLLinkElement = document.querySelector('#appIcon');

    setTitle() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['title']) {
                        return child.snapshot.data['title'];
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe((data: any) => {
            this.titleService.setTitle(environment.appConfig?.name);
            if (data) {
                this.titleService.setTitle(data + ' - ' + environment.appConfig?.name);
            }
        });
    }

}
