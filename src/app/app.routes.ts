import { Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
    {path:"register",component:SignupComponent},
    {path:'login',component:LoginComponent}
];
