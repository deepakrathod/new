import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }        from '../pages/login/login.component';
import { InventoryComponent }        from '../pages/inventory/inventory.component';
import { ViewDetailsComponent }        from '../pages/viewdetails/viewdetails.component';
import { DashboardComponent }        from '../pages/dashboard/dashboard.component';
import {AdminLoginComponent}  from '../pages/adminlogin/adminlogin.component';
import {UserComponent}  from '../pages/users/users.component';
import {BooksComponent}  from '../pages/books/books.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: InventoryComponent},
    { path: 'login', component: LoginComponent},
    { path: 'adminlogin', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent,
    children: [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UserComponent },
      { path: 'books', component: BooksComponent }
    ]
    },
    { path: 'viewdetails/:id', component: ViewDetailsComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
