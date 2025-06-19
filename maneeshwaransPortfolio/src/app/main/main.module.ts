import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ServiceComponent,
    WorksComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
