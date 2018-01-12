import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";

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
import { SortByPipe } from './pipes/sort-by.pipe';
import { TermsComponent } from './terms/terms.component';
import { FooterComponent } from './footer/footer.component';


import { PetsService } from './services/pets.service';
import { AuthService } from './auth/auth.service';
import { PetService } from './pet/pet.service';
import { LogoutComponent } from './auth/logout/logout.component';
import { HistoryComponent } from './history/history.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: SignupComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'pet-detail', component: PetDetailComponent},
  {path: 'schedule/:id', component: PetScheduleComponent},
  {path: 'terms', component: TermsComponent },
  {path: 'logout', component: LogoutComponent },
  {path: 'history', component: HistoryComponent },
  
  // {path: '*', redirectTo: ''},
];



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
    LandingComponent,
    SortByPipe,
    TermsComponent,
    FooterComponent,
    LogoutComponent,
    HistoryComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //AppRoutingModule
    RouterModule.forRoot(appRoutes),

  ],
  providers: [PetsService, AuthService, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
