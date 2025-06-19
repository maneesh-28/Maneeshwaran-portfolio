import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  title = 'Projects';
  intro = 'Here are some of my highlighted works. Each project represents a blend of clean design and practical functionality.';

  projects = [
    {
      name: 'Skilld Study Hub',
      logo: '/assets/img/skilld-logo.png',
      liveUrl: 'https://skilld.vercel.app',
      githubUrl: 'https://github.com/your-username/skilld'
    },
    {
      name: 'Gentle Luxe',
      logo: '/assets/img/gentleluxe-logo.png',
      liveUrl: 'https://gentleluxe.vercel.app',
      githubUrl: 'https://github.com/your-username/gentle-luxe'
    },
  ];

}
