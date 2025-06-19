import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
socialLinks = [
  { link: 'https://linkedin.com/in/maneesh...', img: '/assets/logo/linkedin.png', alt: 'LinkedIn' },
  { link: 'mailto:maneesh@example.com', img: '/assets/logo/gmail.png', alt: 'Gmail' },
  { link: 'https://github.com/maneesh...', img: '/assets/logo/github.png', alt: 'GitHub' },
  { link: 'https://instagram.com/maneesh...', img: '/assets/logo/instagram.png', alt: 'Instagram' },
];


}
