import { Component, ViewChild } from '@angular/core'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isExpanded = true
  isLoggedIn = false

  @ViewChild('sidenav', { static: true }) sidenav: any

  constructor(
    private auth: AuthService
  ) {
    // Check if the user is logged in
    this.isLoggedIn = this.auth.isLoggedIn() ? true : false
  }

  toggleSideBar() {
    this.sidenav.toggle();
  }
}