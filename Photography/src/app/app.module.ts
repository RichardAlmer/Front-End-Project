import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    PortfolioPageComponent,
    AboutPageComponent,
    FooterComponent,
    ContactPageComponent,
    CustomersPageComponent,
    TestimonialPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
