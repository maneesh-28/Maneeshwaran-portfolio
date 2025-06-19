import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: "navbar",component: NavbarComponent},
  {path: "",component: HomeComponent},
  {path: "about",component: AboutComponent},
  {path: "service",component: ServiceComponent},
  {path: "works",component: WorksComponent},
  {path: "contact",component: ContactComponent},
  {path: "footer",component: FooterComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
