import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ייבוא של HttpClientModule
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { HmosComponent } from './components/hmos/hmos.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { EditingFilesComponent } from './components/PersonalArea/editing-files/editing-files.component';
import { LessonSystemComponent } from './components/PersonalArea/lesson-system/lesson-system.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PaymentsComponent } from './components/PersonalArea/payments/payments.component';
import { PersonalAreaComponent } from './components/PersonalArea/personal-area/personal-area.component';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutComponent } from './components/about/about.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SystemComponent } from './components/system/system.component';
import { provideHttpClient } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
// import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureComponent } from './components/signature/signature.component';
// import { TruncateTextDirectiveDirective } from './components/about/truncate-text-directive.directive';
// import { TruncateTextDirective } from './components/about/truncate-text.directive';
import { AfterRegistrationComponent } from './components/after-registration/after-registration.component';
import { StoreModule } from '@ngrx/store';
import { registrationReducer } from './store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SubscriptionBenefitsComponent } from './components/subscription-benefits/subscription-benefits.component';
import { HomeSubscriptionBenefitsComponent } from './components/home/home-subscription-benefits/home-subscription-benefits.component';
import { PersonalAreaHMOComponent } from './components/PersonalArea/personal-area-hmo/personal-area-hmo.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { HmoLeumitComponent } from './components/hmo-leumit/hmo-leumit.component';
import { ListboxModule } from 'primeng/listbox';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TracksComponent } from './components/tracks/tracks.component';
import { TooltipModule } from 'primeng/tooltip';
import { HomeComponent } from './components/home/home.component';
import { CustomerSubHistoryComponent } from './components/customer-sub-history/customer-sub-history.component';
import { SubscriptionDetailComponent } from './components/customer-sub-history/subscription-detail/subscription-detail.component';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MenubarModule } from 'primeng/menubar';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { DetailsAndRegistrationComponent } from './components/details-and-registration/details-and-registration.component';
import { DialogModule } from 'primeng/dialog'
import { DropdownModule } from 'primeng/dropdown';


import { TruncatePipe } from './components/about/truncate.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component'; // Import your custom pipe
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    HmosComponent,
    OurTeamComponent,
    PaymentOptionsComponent,
    EditingFilesComponent,
    LessonSystemComponent,
    PaymentsComponent,
    PersonalAreaComponent,
    HomeAboutComponent,
    RegistrationComponent,
    AboutComponent,
    SystemComponent,
    DetailsAndRegistrationComponent,
    HomeAboutComponent,
    SignatureComponent,
    TruncatePipe,    
    AfterRegistrationComponent,    
    SubscriptionBenefitsComponent,
    HomeSubscriptionBenefitsComponent,
    PersonalAreaHMOComponent,
    HomeComponent,
    CustomerSubHistoryComponent,
    HmoLeumitComponent,
    TracksComponent,
    HomeComponent,
    CustomerSubHistoryComponent,
    SubscriptionDetailComponent,
    ErrorMessageComponent,
    FooterComponent,
    PdfGeneratorComponent
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    FormsModule,
    AutoCompleteModule,
    TabViewModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    RadioButtonModule,
    CascadeSelectModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ButtonModule,
    // SignaturePadModule,
    // NgbModule,
    ButtonModule,
    StoreModule.forRoot({ registration: registrationReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    MessageModule,
    MessagesModule,
    MessagesModule,
    DialogModule,
    TooltipModule,
    MenubarModule,
    DropdownModule,
    StoreModule.forRoot({ registration: registrationReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    RouterModule.forRoot([]),
  ],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
