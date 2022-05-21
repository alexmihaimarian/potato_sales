import {MenuItem} from 'primeng/api';
import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  get isUserLoggedIn(): Boolean {
    return this.authService.isUserLoggedIn();
  };

  items: MenuItem[];

  ngOnInit() {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'New product',
        icon: 'pi pi-fw pi-box',
        routerLink: 'new-product'
      },
      {
        label:'Sales',
        icon:'pi pi-fw pi-chart-line',
        routerLink: 'sales'
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
