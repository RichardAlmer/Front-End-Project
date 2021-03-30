import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(public nav: NavbarService, public head: HeaderService) { }

  ngOnInit(): void {
    this.nav.show();
    this.head.show();
  }

}
