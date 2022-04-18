import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
        data: { title: 'Orders' },
    },
    {
        path: 'orders',
        component: OrderListComponent,
        data: { title: 'Orders' },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
