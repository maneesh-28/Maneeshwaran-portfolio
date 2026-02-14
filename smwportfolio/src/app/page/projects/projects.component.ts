// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   imports: [CommonModule],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.css'
// })
// export class ProjectsComponent {
//   title = 'Projects';
//   intro = 'Here are some of my highlighted works. Each project represents a blend of clean design and practical functionality.';

//   projects = [
//     {
//       name: 'Skilld Study Hub',
//       logo: '/assets/img/skilld-logo.png',
//       liveUrl: 'https://skilld.vercel.app',
//       githubUrl: 'https://github.com/your-username/skilld'
//     },
//     {
//       name: 'Gentle Luxe',
//       logo: '/assets/img/gentleluxe-logo.png',
//       liveUrl: 'https://gentleluxe.vercel.app',
//       githubUrl: 'https://github.com/your-username/gentle-luxe'
//     },
//   ];

// }




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  intro =
    'Here are some of my highlighted works. Each project represents a blend of clean design and practical functionality.';

  activeTab: string = 'projects';

  tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'casestudies', label: 'Case Studies' },
    { id: 'experiments', label: 'Experiments' }
  ];

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
    }
  ];

  caseStudies = [
    {
      name: 'Healthcare App UX Case Study',
      logo: '/assets/img/healthcare.png',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      name: 'Real Estate App Research',
      logo: '/assets/img/realestate.png',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  experiments = [
    {
      name: 'UI Animation Concepts',
      logo: '/assets/img/ui.png',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      name: 'Design System Playground',
      logo: '/assets/img/designsystem.png',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  get currentData() {
    switch (this.activeTab) {
      case 'casestudies':
        return this.caseStudies;
      case 'experiments':
        return this.experiments;
      default:
        return this.projects;
    }
  }

  get sectionTitle() {
    return this.tabs.find(t => t.id === this.activeTab)?.label;
  }
}
