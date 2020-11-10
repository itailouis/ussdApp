import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/_services';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-customnavbar',
  templateUrl: './customnavbar.component.html',
  styleUrls: ['./customnavbar.component.css']
})
export class CustomnavbarComponent implements OnInit {
 currentUser: User;
 constructor(private router: Router,private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

  ngOnInit() {
  }

}
