import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HobbyComponent } from './hobby/hobby.component';
import { AddhobbyComponent } from './addhobby/addhobby.component';
import { MyfavComponent } from './myfav/myfav.component';
import { MypipePipe } from './mypipe.pipe';
import { PhoneformatPipe } from './phoneformat.pipe';
import { MydirDirective } from './directory/mydir.directive';
import { PhonedirDirective } from './directory/phonedir.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HobbyComponent,
    AddhobbyComponent,
    MyfavComponent,
    MypipePipe,
    PhoneformatPipe,
    MydirDirective,
    PhonedirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
