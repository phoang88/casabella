import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule, MatIconModule, MatCardModule, MatDialogModule} from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent, Popup } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PoliciesComponent } from './policies/policies.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    PoliciesComponent,
    Popup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [Popup],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
