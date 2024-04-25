import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() isOpened?: boolean

  pageName: string = 'STOCK'
  version = '1.0.0'

  constructor(
    private http: UserService
  ) { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onClickSignout() {
    this.http.Logout().subscribe(() => {
      window.location.href = '/login'
    })
  }

}