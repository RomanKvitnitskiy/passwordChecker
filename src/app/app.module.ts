import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PasswordCheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PasswordCheckerComponent]
})
export class AppModule { }
