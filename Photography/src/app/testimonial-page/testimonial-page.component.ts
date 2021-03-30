import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-testimonial-page',
  templateUrl: './testimonial-page.component.html',
  styleUrls: ['./testimonial-page.component.css']
})
export class TestimonialPageComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
