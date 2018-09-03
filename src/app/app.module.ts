import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragComponent } from './drag/drag.component';
import { FileDropModule } from 'ngx-file-drop';
import {HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileDropModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
