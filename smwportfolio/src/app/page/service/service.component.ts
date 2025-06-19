import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
 title = 'Services';
  intro = "Here are the technologies and tools I work with to build efficient, modern web applications:";

stacks: string[] = [
  // Frontend
  'HTML', 'CSS3', 'SCSS', 'Tailwind CSS', 'TypeScript', 'Angular',

  // Backend
  'Node.js', 'Express.js', 'PostgreSQL', 'PG Admin',

  // Tools & Platforms
  'Postman API', 'Render Hosting', 'Vercel Hosting', 'Figma (Basic)',

  // Programming & Concepts
  'DSA in JS', 'Python (Basic)'
];


}
