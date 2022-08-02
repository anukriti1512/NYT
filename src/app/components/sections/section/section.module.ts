import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { WorldComponent } from './world/world.component';
import { ScienceComponent } from './science/science.component';
import { SectionLandingPageComponent } from './section-landing-page/section-landing-page.component';
import { AngularMaterialModule } from 'src/app/Angular Material module/angular-material/angular-material.module';

@NgModule({
  declarations: [WorldComponent, ScienceComponent, SectionLandingPageComponent],
  imports: [CommonModule, SectionRoutingModule, AngularMaterialModule],
})
export class SectionModule {}
