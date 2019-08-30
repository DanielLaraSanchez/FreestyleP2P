import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivadoComponent } from './Views/privado/privado.component';
import { GeneralComponent } from './Views/general/general.component';
import { HomeComponent } from './Views/home/home.component';
import { UsercardComponent } from './Components/usercard/usercard.component';

//Material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';






@NgModule({
  declarations: [
    AppComponent,
    PrivadoComponent,
    GeneralComponent,
    HomeComponent,
    UsercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Material
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
