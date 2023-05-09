import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container/container.component';
import { NavComponent } from './Container/nav/nav.component';
import { HeaderComponent } from './Container/header/header.component';

@NgModule({
  declarations: [AppComponent, ContainerComponent, NavComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
