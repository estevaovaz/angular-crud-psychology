import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PsicologosModule } from './psicologos/psicologos.module';
import { PsicologoService } from './psicologos/shared/psicologo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PsicologosModule
  ],
  providers: [
    PsicologoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
