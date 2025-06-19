import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ServiceComponent } from './page/service/service.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ContactComponent } from './page/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

export const routes: Routes = [
    {path:'home' , component: HomeComponent},
    {path:'about' , component: AboutComponent},
    {path:'service' , component: ServiceComponent},
    {path:'projects' , component: ProjectsComponent},
    {path:'contact' , component: ContactComponent},

    {path:'header' , component: HeaderComponent},
    {path:'footer' , component: FooterComponent},

];
