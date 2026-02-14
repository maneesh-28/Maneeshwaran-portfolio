import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    title = 'About';
  // intro =
  //   "Hi, I'm Maneeshwaran, a passionate Full Stack Developer skilled in building engaging and efficient web and mobile applications. I enjoy working with Angular,Ionic, Node.js, and PostgreSQL, and have experience in RESTful APIs, design tools like Figma, and basic DSA in JS and Python.";
  // passion =
  //   'I love exploring new technologies and pushing creative boundaries with clean, user-focused design.';
  intro =
  "I specialize in designing and developing digital products that solve real problems by balancing user needs with business growth. With a strong foundation in UX and full-stack development, I take products from concept to launch with clarity and structure.";

passion =
  "I believe great products are built where usability meets strategy — combining thoughtful design, clean code, and measurable outcomes.";


}
