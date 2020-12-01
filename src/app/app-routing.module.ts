import { DonatorsComponent } from './views/donators/donators.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donators', component: DonatorsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
