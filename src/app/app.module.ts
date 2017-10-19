import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { VisitComponent } from './visit.component';
import { ThemeComponent } from './theme.component';
import { GuideComponent } from './guide.component';


@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    ThemeComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
