import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PollListComponent} from './poll-list/poll-list.component';
import {VotingComponent} from './voting/voting.component';

const routes: Routes = <Routes>[
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'polls',
        component: PollListComponent
    },
    {
        path: 'voting',
        component: VotingComponent
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
