import { Component, OnInit } from '@angular/core';
import {PollService} from '../services/poll.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public voter: any;
  constructor(private pollService: PollService, private router: Router) { }

  ngOnInit() {
    this.voter = {
      username: '',
      email: ''
    };
  }

  login(form, valid) {
    this.pollService.getVoter(form.email).subscribe((voter: any) => {
      if (voter) {
        localStorage.setItem('voter', JSON.stringify(voter));
      } else {
        this.pollService.addVoter(form).subscribe((registeredVoter: any) => {
          localStorage.setItem('voter', JSON.stringify(registeredVoter));
        });
      }
      this.router.navigate(['polls']);
    });
  }
}
