import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatDividerModule, MatListModule} from '@angular/material';
import { LineClampComponent } from './line-clamp/line-clamp.component';
@NgModule({
  declarations: [
    AppComponent,
    LineClampComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
