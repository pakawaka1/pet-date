import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AuthComponent } from './auth/auth.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FaqComponent } from './faq/faq.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PetComponent } from './pet/pet.component';
import { PetScheduleComponent } from './pet/pet-schedule/pet-schedule.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { LandingComponent } from './landing/landing.component';
import { TermsComponent } from './terms/terms.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: SignupComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'pet-detail', component: PetDetailComponent},
  {path: 'schedule/:id', component: PetScheduleComponent},
  {path: 'terms', component: TermsComponent },
  {path: 'logout', component: LogoutComponent }
  // {path: '*', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
