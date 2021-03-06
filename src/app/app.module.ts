import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { NotificationComponent } from './app/notification/notification.component';
import { EmailComponent } from './app/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
