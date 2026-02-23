import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats = [
    { value: '150+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '12+', label: 'Years of Excellence' }
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
