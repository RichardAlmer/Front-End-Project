import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.css']
})
export class ImprintComponent implements OnInit {

  constructor(public nav: NavbarService, public head: HeaderService) { }

  ngOnInit(): void {
    this.nav.show();
    this.head.show();
  }

}
