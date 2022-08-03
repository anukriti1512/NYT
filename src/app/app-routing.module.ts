import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article-detail/:uri', component: ArticleDetailComponent },
  {
    path: 'section',
    loadChildren: () =>
      import('./components/sections/section/section.module').then(
        (m) => m.SectionModule
      ),
  },
  { path: 'search/:query', component: SearchScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
