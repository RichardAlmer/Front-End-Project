import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    massage: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required)
  })
  
  constructor() { }

  ngOnInit(): void {
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
