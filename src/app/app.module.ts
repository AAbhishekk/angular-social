import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
