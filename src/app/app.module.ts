import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// angular material api
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
// angular material  api

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LinksComponent } from './pages/links/links.component';
import { DialoglinksComponent } from './pages/links/dialoglinks/dialoglinks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllLinksComponent } from './pages/links/all-links/all-links.component';
import { CategoriesComponent } from './pages/links/categories/categories.component';
import { DialognameComponent } from './pages/links/categories/dialogname/dialogname.component';
import { NotesComponent } from './pages/links/notes/notes.component';
import { NotesdialogComponent } from './pages/links/notes/notesdialog/notesdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    LinksComponent,
    DialoglinksComponent,
    NavbarComponent,
    AllLinksComponent,
    CategoriesComponent,
    DialognameComponent,
    NotesComponent,
    NotesdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LinksComponent, DialoglinksComponent, DialognameComponent, NotesdialogComponent]
})
export class AppModule {}
