import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
