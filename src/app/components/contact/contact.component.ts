import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    fullName: '',
    workEmail: '',
    company: '',
    serviceInterest: '',
    projectDetails: ''
  };

  submitted = false;
  loading = false;

  services = [
    'VoIP Solutions',
    'Custom Web Development',
    'CRM Systems',
    'Tailored AI Models',
    'Virtual Assistants',
    'Multiple Services'
  ];

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.loading = true;
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
    }, 1000);
  }

  resetForm() {
    this.submitted = false;
    this.formData = {
      fullName: '',
      workEmail: '',
      company: '',
      serviceInterest: '',
      projectDetails: ''
    };
  }
}
