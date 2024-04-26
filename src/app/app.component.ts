import { Component, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isExpanded = true
  isLoggedIn = false

  @ViewChild('sidenav', { static: true }) sidenav: any

  constructor() {
    // Check if the user is logged in
    this.isLoggedIn = localStorage.getItem('LoggedInToken') ? true : false
  }

  toggleSideBar() {
    this.sidenav.toggle();
  }
}