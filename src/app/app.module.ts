import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './clickoutside.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
