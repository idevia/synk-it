// import { firebaseonfig } from './../environments/environment';
import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import {  FormGroup } from '@angular/forms';

import 'rxjs';
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
import { MatMenuModule } from '@angular/material/menu';

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
import { NotecateoriesComponent } from './pages/links/notes/notecateories/notecateories.component';
import { CategorydialogComponent } from './pages/links/notes/notecateories/categorydialog/categorydialog.component';
//services
import { AuthService } from '../core/auth.service';
//firebase setup 
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
/*  */
const firebaseconfig = {
  apiKey: "AIzaSyA5o8zK2Cx2Wih0XYbkF7avDSNzNTYr5Js",
  authDomain: "test-synk-it.firebaseapp.com",
  databaseURL: "https://test-synk-it.firebaseio.com",
  projectId: "test-synk-it",
  storageBucket: "test-synk-it.appspot.com",
  messagingSenderId: "582135063032"

};

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
    NotesdialogComponent,
    NotecateoriesComponent,
    CategorydialogComponent

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
    MatExpansionModule,
    MatMenuModule, ReactiveFormsModule, FormsModule,
    HttpModule,
    
    // firebase
    
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
      LinksComponent,
      DialoglinksComponent,
      DialognameComponent,
      NotesdialogComponent,
      CategorydialogComponent]
})
export class AppModule {}
