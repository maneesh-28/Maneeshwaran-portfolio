import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { ServiceComponent } from './page/service/service.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ContactComponent } from './page/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

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
export class AppComponent {
  title = 'Maneeshwaran | Portfolio';
  // email: string = 'maneeshwaran01@gmail.com';

}
