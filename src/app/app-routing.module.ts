import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { StockComponent } from './components/stock/stock.component'

// Auth Guard
import { authenGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [authenGuard], 
    data: { title: 'Login' } 
  },
  { 
    path: 'register', 
    component: RegisterComponent,
    canActivate: [authenGuard], 
  },
  { 
    path: 'stock', 
    component: StockComponent,
    canActivate: [authenGuard],
  },
  { path: '**', redirectTo: 'login' }, // undefined pages
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }