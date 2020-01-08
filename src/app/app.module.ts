import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginModule } from './login'
import { SharedModule } from './shared'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
