import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    title = 'About';
  intro =
    "Hi, I'm Maneeshwaran, a passionate Full Stack Developer skilled in building engaging and efficient web applications. I enjoy working with Angular, Node.js, and PostgreSQL, and have experience in RESTful APIs, design tools like Figma, and basic DSA in JS and Python.";
  passion =
    'I love exploring new technologies and pushing creative boundaries with clean, user-focused design.';

}
