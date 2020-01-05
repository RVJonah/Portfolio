import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { Ff7Component } from './ff7/ff7.component';
import { VetcalcComponent } from './vetcalc/vetcalc.component';
import { ProjectsComponent } from './projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BooksComponent } from './books/books.component';
import { PinochiosComponent } from './pinochios/pinochios.component';
import { FlackComponent } from './flack/flack.component';


const routes: Routes = [
  {path: 'projects', component: ProjectsComponent,
  children: [
    { path: '', redirectTo: 'summary', pathMatch: 'full' },
    { path: 'summary', component: SummaryComponent },
    { path: 'ff7-remake', component: Ff7Component },
    { path: 'vet-calculations-practice', component: VetcalcComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'books', component: BooksComponent },
    { path: 'pinochios', component: PinochiosComponent },
    { path: 'flack', component: FlackComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ProjectsRoutingModule { }
