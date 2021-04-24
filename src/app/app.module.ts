import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentHelloComponent } from './components/component-hello/component-hello.component';
import { InterpolationComponent } from './components/data-binding/interpolation/interpolation.component';
import { PropertyComponent } from './components/data-binding/property/property.component';
import { EventsComponent } from './components/data-binding/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHelloComponent,
    InterpolationComponent,
    PropertyComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PropertyComponent]
})
export class AppModule { }
