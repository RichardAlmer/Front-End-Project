import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName:new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    massage: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.contact.valid) {
      // alert(`Thank you for booking at TravelGavel.\nTo pay ${this.cartService.getTotal().toFixed(2)} EUR.\nWe will send you the invoice by email.`)
      this.contact.reset();
    }
  }

}
