import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  skills = [
  'Angular', 'Node.js', 'Express.js', 'PostgreSQL',
  'PG Admin', 'Postman API', 'Render Hosting', 'Vercel Hosting',
  'Figma (Basic)', 'DSA in JS', 'Python (Basic)'
];


}
