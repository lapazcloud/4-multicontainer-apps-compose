import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { VotingComponent } from './voting/voting.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdToolbarModule} from '@angular/material';
import {PollService} from "./services/poll.service";

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      ReportComponent,
      PollListComponent,
      VotingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    AppRoutingModule
  ],
  providers: [
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
