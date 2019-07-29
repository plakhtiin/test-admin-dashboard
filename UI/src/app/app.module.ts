import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppStateModule } from './store/app-state.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStateModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
