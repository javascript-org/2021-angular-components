import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentHelloComponent } from './components/component-hello/component-hello.component';
import { InterpolationComponent } from './components/data-binding/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHelloComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InterpolationComponent]
})
export class AppModule { }
