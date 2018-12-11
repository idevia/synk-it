import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LinksComponent } from './pages/links/links.component';
import { AllLinksComponent } from './pages/links/all-links/all-links.component';
import { CategoriesComponent } from './pages/links/categories/categories.component';
import { NotesComponent } from './pages/links/notes/notes.component';



const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
          {
              path: '',
              redirectTo: 'links',
              pathMatch: 'full'
          },
          {
            path: 'links', component: LinksComponent,
            children: [
                { path: 'all', component: AllLinksComponent },
                { path: 'categories', component: CategoriesComponent },
                { path: '', redirectTo: '/dashboard/links/all', pathMatch: 'full' }
            ]
          },
          {
            path: 'notes', component: LinksComponent,
            children: [
              { path: 'all', component: NotesComponent },
              { path: '', redirectTo: '/dashboard/notes/all', pathMatch: 'full' }
            ]
          },

        ]
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
