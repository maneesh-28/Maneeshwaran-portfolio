import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maneeshwaransPortfolio';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveLink();
  }

  
  private updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-list li a');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        links[index].classList.add('active');
      } else {
        links[index].classList.remove('active');
      }
    });
  }

}


