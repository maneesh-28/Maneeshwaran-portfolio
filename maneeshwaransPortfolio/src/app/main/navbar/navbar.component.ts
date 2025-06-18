import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    // Variable to control the mobile menu toggle
    menuOpen = false;

    // Method to toggle the mobile menu
    togglenav() {
      this.menuOpen = !this.menuOpen;
    }

    smoothScroll(targetId: string): void {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
}
