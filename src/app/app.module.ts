import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostcardComponent } from './components/postcard/postcard.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostcardComponent,
    UppercasePipe,
    HighlightDirective,
    PostDetailComponent,
    UserListComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
