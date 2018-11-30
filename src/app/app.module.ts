import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// angular material api
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule } from '@angular/material/input';
//angular material  api 

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

//components

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule, AppRoutingModule,BrowserAnimationsModule,
    MatButtonModule,MatCheckboxModule,MatCardModule,MatInputModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
