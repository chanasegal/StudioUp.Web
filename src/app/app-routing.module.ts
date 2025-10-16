import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalAreaComponent } from './components/PersonalArea/personal-area/personal-area.component';
import { LoginComponent } from './components/login/login.component';
import { SystemComponent } from './components/system/system.component';
import { AboutComponent } from './components/about/about.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { SubscriptionBenefitsComponent } from './components/subscription-benefits/subscription-benefits.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { SignatureComponent } from './components/signature/signature.component';
import { HomeSubscriptionBenefitsComponent } from './components/home/home-subscription-benefits/home-subscription-benefits.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AfterRegistrationComponent } from './components/after-registration/after-registration.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { HmosComponent } from './components/hmos/hmos.component';
import { CustomerSubHistoryComponent } from './components/customer-sub-history/customer-sub-history.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailsAndRegistrationComponent } from './components/details-and-registration/details-and-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeAboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeAboutComponent },
  { path: 'home/about', component: AboutComponent },
  { path: 'system', component: SystemComponent },
  { path: 'SubscriptionBenefits', component: SubscriptionBenefitsComponent },
  { path: 'payment-options', component: PaymentOptionsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: LoginComponent },
  {
    path: 'personal-area',
    component: PersonalAreaComponent,
    canActivate: [AuthGuard],
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'afterRegistration', component: AfterRegistrationComponent},
  { path: 'HMOs', component: HmosComponent },
  { path: 'subscriptionPerCustomer', component: CustomerSubHistoryComponent },
  { path: 'details/:CustomerID/:TrainingId', component: DetailsAndRegistrationComponent },
  { path: 'subscription-benefits', component: SubscriptionBenefitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
