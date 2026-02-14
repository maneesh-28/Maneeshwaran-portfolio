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
  // intro = "Here are the technologies and tools I work with to build efficient, modern web applications:";
  intro = "I design and develop digital products by aligning user experience with business objectives — from discovery to delivery.";


stacks: string[] = [
  // // Frontend
  // 'HTML', 'CSS3', 'SCSS', 'Tailwind CSS', 'TypeScript', 'Angular', 'Ionic',

  // // Backend
  // 'Node.js', 'Express.js', 'PostgreSQL', 'PG Admin',

  // // Tools & Platforms
  // 'Postman API', 'Render Hosting', 'Vercel Hosting', 'Figma (Basic)',

  // // Programming & Concepts
  // 'DSA in JS', 'Python (Basic)'


   // 1️⃣ Core Web Foundations
    'HTML',
    'CSS3',
    'SCSS',
    'Tailwind CSS',
    'TypeScript',

    // 2️⃣ Frontend Frameworks
    'Angular',
    'Ionic',

    // 3️⃣ Backend & Database
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'PG Admin',

    // 4️⃣ API & Deployment
    'Postman API',
    'Render Hosting',
    'Vercel Hosting',

    // 5️⃣ Design & UX
    'Design Thinking',
    'UX Research',
    'Information Architecture',
    'User Flows',
    'User Experience (UX)',
    'User Experience Design (UED)',
    'User Interface Design',
    'Responsive and Usability Design',
    'Advance Prototyping and Wireframing',
    'Mobile Application Design',
    'Web Design',
    'Product Design',

    // 6️⃣ Design Tool
    'Figma (Basic)'

];

}
