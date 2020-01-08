import { NgModule } from '@angular/core'
import { SharedModule } from '../shared'
import { LoginRoutingModule } from './login.routing.module'

import { RegisterComponent } from './register'
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {}
