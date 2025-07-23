import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { ServiceComponent } from './page/service/service.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ContactComponent } from './page/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'Maneeshwaran | Portfolio';
  // email: string = 'maneeshwaran01@gmail.com';

  
 constructor(private titleService: Title, private metaService: Meta) {}

    ngOnInit(): void {
    // Set page title
    this.titleService.setTitle('Maneeshwaran | Fullstack Developer | UI/UX Designer');

    // Add/update meta tags
    this.metaService.addTags([
      {
        name: 'description',
        content: "I'm Maneeshwaran, a Fullstack Developer skilled in Angular, Node.js, and Figma UI/UX Design. I build fast, modern web apps and elegant interfaces."
      },
      {
        name: 'keywords',
        content: 'Maneeshwaran, Fullstack Developer, Angular Developer, Node.js Developer, Figma UI UX Designer, Web Developer, Portfolio, Frontend, Backend'
      },
      {
        name: 'author',
        content: 'Maneeshwaran'
      }
    ]);
  }
}
