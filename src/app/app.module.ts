import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { FattureComponent } from './fatture/fatture.component';
import { UtentiComponent } from './utenti/utenti.component';
import { FattureDetailComponent } from './fatture-detail/fatture-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from './users.service';
import { UtilsService } from './utils.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilsExternalServicesService } from './utils-external-services.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    DetailComponent,
    FattureComponent,
    UtentiComponent,
    FattureDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    UtilsService,
    UtilsExternalServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
