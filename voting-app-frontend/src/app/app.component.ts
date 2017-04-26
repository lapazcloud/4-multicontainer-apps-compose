import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loggedUser: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('voter');
    if (user) {
      this.loggedUser = JSON.parse(user);
    }
  }

  logout() {
    localStorage.removeItem('voter');
    this.router.navigate(['login']);
  }
}
