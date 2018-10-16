import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GetMenuJsonService} from './get-menu-json.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationBarsModule } from './navigation-bars/navigation-bars.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavigationBarsModule,
  ],
  providers: [GetMenuJsonService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
