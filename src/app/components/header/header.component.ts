import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  // สร้างตัวแปรไว้เก็บข้อมูลผู้ใช้งานที่ Login
  userProfile: any = {
    "username": "",
    "email": "",
    "role": ""
  }

  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() isOpened?: boolean

  pageName: string = 'STOCK'
  version = '1.0.0'

  constructor(
    private auth: AuthService
  ) {
    // ดึงข้อมูลผู้ใช้งานที่ Login มาแสดง
    this.userProfile.username = this.auth.getUser().username
    this.userProfile.email = this.auth.getUser().email
    this.userProfile.role = this.auth.getUser().role
  }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onClickSignout() {
    this.auth.logout()
    window.location.href = '/login'
  }

}