import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

enum FormState {
  Default,
  Loading,
  Error,
  Success
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ContactService, ]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formState: FormState = FormState.Default;
  formStateEnum = FormState;

  location: string = 'Tunisia, Nabeul, 8000';
  email: string = 'info@mentor.com';
  phone: string = '+216 ********'

  constructor(private contactService: ContactService) {}
  
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      return;
    }

    this.formState = FormState.Loading;

    const contact: Contact = this.contactForm.value;

    this.contactService.sendContact(contact).subscribe(
      () => {
        this.formState = FormState.Success;
      },
      (error) => {
        console.error('Error submitting contact form:', error);
        this.formState = FormState.Error;
      }
    );
  }
}
