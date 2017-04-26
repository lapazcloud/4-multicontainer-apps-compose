import { Component, OnInit } from '@angular/core';
import {PollService} from "../services/poll.service";

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
  polls: any;
  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls().subscribe((polls) => {
      this.polls = polls;
    });
  }

  onCreated(event) {
      setTimeout (() => {
          this.pollService.getPolls().subscribe((polls) => {
              this.polls = polls;
          });
      }, 200);
  }
}
