import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentcComponent } from './parentc/parentc.component';
import { ChildcComponent } from './childc/childc.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentcComponent, ChildcComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
