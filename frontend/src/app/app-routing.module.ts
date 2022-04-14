
import { ManageOrderComponent } from './pages/manage-order/manage-order.component';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
        data: { title: 'Orders' }
    },
    {
        path: 'orders',
        component: ManageOrderComponent,
        data: { title: 'Orders' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
