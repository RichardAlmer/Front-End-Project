import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public nav: NavbarService, public head: HeaderService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.head.hide();
  }

}
