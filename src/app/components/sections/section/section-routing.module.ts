import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { ScienceComponent } from './science/science.component';
import { SectionLandingPageComponent } from './section-landing-page/section-landing-page.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {
    path: '',
    component: SectionLandingPageComponent,
    children: [
      { path: 'world', component: WorldComponent },
      { path: 'science', component: ScienceComponent },
    ],
  },
  // { path: '', component: HomeComponent },
  // { path: 'world', component: WorldComponent },
  // { path: 'science', component: ScienceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionRoutingModule {}
