import { NgModule } from '@angular/core'
import { SharedModule } from '../shared'
import { LoginRoutingModule } from './login-routing.module'

import { RegisterComponent } from './register'
import { LoginComponent } from './login'
import { ForgotComponent } from './forgot'

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent, RegisterComponent, ForgotComponent]
})
export class LoginModule {}
