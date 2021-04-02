import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName:new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required)
  })
  
  constructor(public nav: NavbarService, public head: HeaderService) { }

  ngOnInit(): void {
    this.nav.show();
    this.head.show();
  }

  onSubmit(){
    var sendAlert = document.getElementById('sendAlert');

    if (this.contact.valid) {
      sendAlert.innerHTML = 'Your message has been sent.';
      sendAlert.style.color = 'green';
      this.contact.reset();
    }else{
      sendAlert.innerHTML = 'Please fill in all fields.';
      sendAlert.style.color = 'red';
    }
  }

}
