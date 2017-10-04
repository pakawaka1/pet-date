import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AuthComponent } from './src/app/auth/auth.component';
import { LogInComponent } from './src/app/auth/log-in/log-in.component';
import { SignupComponent } from './src/app/auth/signup/signup.component';
import { FaqComponent } from './src/app/faq/faq.component';
import { UserProfileComponent } from './src/app/user-profile/user-profile.component';
import { PetComponent } from './src/app/pet/pet.component';
import { PetScheduleComponent } from './src/app/pet/pet-schedule/pet-schedule.component';
import { PetDetailComponent } from './src/app/pet/pet-detail/pet-detail.component';
import { PetListComponent } from './src/app/pet/pet-list/pet-list.component';

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
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
