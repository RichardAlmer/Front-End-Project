import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css']
})
export class OfferPageComponent implements OnInit {

  constructor(public nav: NavbarService, public head: HeaderService) { }

  ngOnInit(): void {
    this.nav.show();
    this.head.show();
  }

}
