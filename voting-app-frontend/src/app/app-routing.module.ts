import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PollListComponent} from './poll-list/poll-list.component';
import {VotingComponent} from './voting/voting.component';
import {ReportComponent} from "./report/report.component";
import {CanAccessGuard} from './guards/canAccess.guard';

const routes: Routes = <Routes>[
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'polls',
        component: PollListComponent,
        canActivate: [CanAccessGuard]
    },
    {
        path: 'report/:id',
        component: ReportComponent,
        canActivate: [CanAccessGuard]
    },
    {
        path: 'voting/:id',
        component: VotingComponent,
        canActivate: [CanAccessGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
