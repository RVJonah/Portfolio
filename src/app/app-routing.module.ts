import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyJourneyComponent } from './my-journey/my-journey.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsModule } from './projects/projects.module';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-journey', component: MyJourneyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProjectsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
