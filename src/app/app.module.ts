import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponent } from './server/server.component';

@NgModule({
    declarations: [ 
      AppComponent, 
      HelloComponent, 
      ServerComponent
    ],
  imports:      [ 
    BrowserModule, 
    FormsModule
   ],
  bootstrap:    [AppComponent ]
})
export class AppModule { }
