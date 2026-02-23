import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  solutions = [
    'VoIP Solutions',
    'Web Development',
    'CRM Systems',
    'AI Models',
    'Virtual Assistants'
  ];

  company = [
    'About Us',
    'Case Studies',
    'Careers',
    'Privacy Policy',
    'Contact'
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
