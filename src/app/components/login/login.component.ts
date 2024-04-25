import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from '../../services/user.service'
import { MatDialog } from '@angular/material/dialog'
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // Form Validation
  loginForm!: FormGroup

  // Variables สำหรับรับค่าจากฟอร์ม
  userData = {
    username: '',
    password: '',
  }

  // สำหรับซ่อนแสดง password
  hide = true

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // กำหนดค่าให้กับ Form
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  // ฟังก์ชัน Submit สำหรับ Login
  submitLogin() {
    if (this.loginForm.invalid) {
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: 'มีข้อผิดพลาด',
          icon: 'error',
          iconColor: 'red',
          subtitle: 'กรุณากรอกข้อมูลให้ครบถ้วน',
        },
      })
    } else {
      this.userData.username = this.loginForm.value.username
      this.userData.password = this.loginForm.value.password

      // เรียกใช้งาน Service สำหรับ Login
      this.http.Login(this.userData).subscribe({
        
        next: (data: any) => {
          if (data.token != null) {
            this.dialog.open(AlertDialogComponent, {
              data: {
                title: 'Login Success',
                icon: 'check_circle',
                iconColor: 'green',
                subtitle: 'Welcome to our website.',
              },
            })

            // สำหรับเก็บ Token ลง Local Storage
            localStorage.setItem('token', data.token)
            window.location.href = '/stock'
          }
        },

        error: (error) => {
          console.log(error)
          this.dialog.open(AlertDialogComponent, {
            data: {
              title: 'มีข้อผิดพลาด',
              icon: 'error',
              iconColor: 'red',
              subtitle: 'ข้อมูลเข้าสู่ระบบไม่ถูกต้อง',
            },
          })
        },

      })
    }
  }

  // สำหรับลิงก์ไปหน้า Register
  onClickRegister() {
    this.router.navigate(['/register'])
  }
}
