﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './areas/dashboard/dashboard.component'

const appRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch:'full'
    }
   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
