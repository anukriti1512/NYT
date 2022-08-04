import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Angular Material module/angular-material/angular-material.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';
import { ArticleCommentsComponent } from './components/article-detail/article-comments/article-comments.component';
import { DataSharingService } from './components/services/data-sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ArticleDetailComponent,
    SearchScreenComponent,
    ArticleCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
