import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthComponent,
    LogInComponent,
    SignupComponent,
    FaqComponent,
    UserProfileComponent,
    PetComponent,
    PetScheduleComponent,
    PetDetailComponent,
    PetListComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
