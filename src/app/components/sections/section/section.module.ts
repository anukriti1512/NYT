import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { WorldComponent } from './world/world.component';
import { ScienceComponent } from './science/science.component';
import { SectionLandingPageComponent } from './section-landing-page/section-landing-page.component';


@NgModule({
  declarations: [
    WorldComponent,
    ScienceComponent,
    SectionLandingPageComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule
  ]
})
export class SectionModule { }
