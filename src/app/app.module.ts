import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { DonatorsComponent } from './views/donators/donators.component';
import { DonatorsListComponent } from './components/donators-list/donators-list.component';
import { DonatorsItemComponent } from './components/donators-item/donators-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    TodoListComponent,
    TodoItemComponent,
    DonatorsComponent,
    DonatorsListComponent,
    DonatorsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
