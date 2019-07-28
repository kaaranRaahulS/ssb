import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CreatepractisetestComponent } from './createpractisetest/createpractisetest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidemenuComponent,
    CreatepractisetestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
