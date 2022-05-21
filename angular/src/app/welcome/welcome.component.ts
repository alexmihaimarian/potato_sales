import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home'
      },
      {
        label:'New product',
        icon:'pi pi-fw pi-box'
      },
      {
        label:'Sales',
        icon:'pi pi-fw pi-chart-line'
      },
    ];
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
