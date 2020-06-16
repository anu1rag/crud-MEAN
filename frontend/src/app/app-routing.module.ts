import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', 
  component: MainComponent,
  canActivate: [AuthGuard],
  children:[
    { path: '', component: HomeComponent },
    { path: 'state', loadChildren: () => import('./state/state.module').then(m => m.StateModule) }, 
    { path: 'district', loadChildren: () => import('./district/district.module').then(m => m.DistrictModule) },
    { path: 'child', loadChildren: () => import('./child/child.module').then(m => m.ChildModule) }
  ] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
