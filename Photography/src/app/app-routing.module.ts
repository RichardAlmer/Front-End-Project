import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { AboutPageComponent} from './about-page/about-page.component';
import { ContactPageComponent} from './contact-page/contact-page.component';
import { CustomersPageComponent} from './customers-page/customers-page.component';
import { PortfolioPageComponent} from './portfolio-page/portfolio-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { OfferPageComponent } from './offer-page/offer-page.component';





const routes: Routes = [
  {
    path:"",component: LandingPageComponent
  },
  {
    path:"about",component: AboutPageComponent
  },
  {
    path:"contact",component: ContactPageComponent
  },
  {
    path:"customers",component: CustomersPageComponent
  },
  {
    path:"portfolio",component: PortfolioPageComponent
  },
  {
    path:"privacyPolicy", component: PrivacyPolicyComponent
  },
  {
    path: "imprint", component: ImprintComponent
  },
  {
    path: "documentation", component: DocumentationComponent
  },
  {
    path: "offers", component: OfferPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
