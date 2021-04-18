import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentHelloComponent } from './components/component-hello/component-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentHelloComponent]
})
export class AppModule { }
