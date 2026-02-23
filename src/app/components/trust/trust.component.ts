import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent {
  trustItems = [
    {
      badge: 'SOC 2',
      title: 'Certified & Secure',
      desc: 'Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and proactive threat monitoring across all deployed systems.'
    },
    {
      badge: '24/7',
      title: 'Always-On Support',
      desc: 'Dedicated account managers and a round-the-clock NOC team ensure your critical infrastructure never misses a beat. Average response: under 15 minutes.'
    },
    {
      badge: '3.2×',
      title: 'Proven ROI',
      desc: 'Our clients report an average 3.2× return on technology investment within the first 18 months, driven by automation and optimized workflows.'
    },
    {
      badge: '150+',
      title: 'Strategic Partnerships',
      desc: 'A curated network of 150+ enterprise clients and technology partners, enabling us to deliver integrated solutions with unmatched domain expertise.'
    }
  ];
}
