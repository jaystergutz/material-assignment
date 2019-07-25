import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatDividerModule, MatListModule} from '@angular/material';
import { LineClampComponent } from './line-clamp/line-clamp.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {HttpClientModule} from "@angular/common/http";
import { FabButtonComponent } from './fab-button/fab-button.component';
@NgModule({
  declarations: [
    AppComponent,
    LineClampComponent,
    ToolbarComponent,
    FabButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
