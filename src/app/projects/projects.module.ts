import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.component.routing';

import { SummaryComponent } from './summary/summary.component';
import { Ff7Component } from './ff7/ff7.component';
import { VetcalcComponent } from './vetcalc/vetcalc.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsNavComponent } from './projects-nav/projects-nav.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FF7OverviewComponent } from './ff7/ff7-overview/ff7-overview.component';
import { FF7TechComponent } from './ff7/ff7-tech/ff7-tech.component';
import { FF7AimsComponent } from './ff7/ff7-aims/ff7-aims.component';
import { FF7LearningComponent } from './ff7/ff7-learning/ff7-learning.component';
import { FF7CodeComponent } from './ff7/ff7-code/ff7-code.component';
import { VetCalcOverviewComponent } from './vetcalc/vetcalc-overview/vetcalc-overview.component';
import { VetCalcAimsComponent } from './vetcalc/vetcalc-aims/vetcalc-aims.component';
import { VetCalcTechComponent } from './vetcalc/vetcalc-tech/vetcalc-tech.component';
import { VetCalcLearningComponent } from './vetcalc/vetcalc-learning/vetcalc-learning.component';
import { VetCalcCodeComponent } from './vetcalc/vet-calc-code/code.component';
import { PortfolioOverviewComponent } from './portfolio/portfolio-overview/portfolio-overview.component';
import { PortfolioTechComponent } from './portfolio/portfolio-tech/portfolio-tech.component';
import { PortfolioLearningComponent } from './portfolio/portfolio-learning/portfolio-learning.component';
import { PortfolioAimsComponent } from './portfolio/portfolio-aims/portfolio-aims.component';
import { PortfolioCodeComponent } from './portfolio/portfolio-code/portfolio-code.component';
import { BlogsService } from '../shared/blogs.service';
import { BooksAimsComponent } from './books/books-aims/books-aims.component';
import { BooksCodeComponent } from './books/books-code/books-code.component';
import { BooksLearningComponent } from './books/books-learning/books-learning.component';
import { BooksOverviewComponent } from './books/books-overview/books-overview.component';
import { BooksTechComponent } from './books/books-tech/books-tech.component';
import { BooksComponent } from './books/books.component';
import { PinochiosComponent } from './pinochios/pinochios.component';
import { PinochiosAimsComponent } from './pinochios/pinochios-aims/pinochios-aims.component';
import { PinochiosCodeComponent } from './pinochios/pinochios-code/pinochios-code.component';
import { PinochiosLearningComponent } from './pinochios/pinochios-learning/pinochios-learning.component';
import { PinochiosOverviewComponent } from './pinochios/pinochios-overview/pinochios-overview.component';
import { PinochiosTechComponent } from './pinochios/pinochios-tech/pinochios-tech.component';
import { FlackTechComponent } from './flack/flack-tech/flack-tech.component';
import { FlackComponent } from './flack/flack.component';
import { FlackAimsComponent } from './flack/flack-aims/flack-aims.component';
import { FlackCodeComponent } from './flack/flack-code/flack-code.component';
import { FlackLearningComponent } from './flack/flack-learning/flack-learning.component';
import { FlackOverviewComponent } from './flack/flack-overview/flack-overview.component';



@NgModule({
  declarations: [
    SummaryComponent,
    Ff7Component,
    VetcalcComponent,
    ProjectsNavComponent,
    ProjectsComponent,
    PortfolioComponent,
    FF7OverviewComponent,
    FF7TechComponent,
    FF7AimsComponent,
    FF7LearningComponent,
    FF7CodeComponent,
    VetCalcOverviewComponent,
    VetCalcAimsComponent,
    VetCalcTechComponent,
    VetCalcLearningComponent,
    VetCalcCodeComponent,
    PortfolioOverviewComponent,
    PortfolioTechComponent,
    PortfolioLearningComponent,
    PortfolioAimsComponent,
    PortfolioCodeComponent,
    BooksAimsComponent,
    BooksCodeComponent,
    BooksLearningComponent,
    BooksOverviewComponent,
    BooksTechComponent,
    BooksComponent,
    PinochiosComponent,
    PinochiosAimsComponent,
    PinochiosCodeComponent,
    PinochiosLearningComponent,
    PinochiosOverviewComponent,
    PinochiosTechComponent,
    FlackTechComponent,
    FlackComponent,
    FlackAimsComponent,
    FlackCodeComponent,
    FlackLearningComponent,
    FlackOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule,
  ],
  providers: [
    BlogsService
  ]
})
export class ProjectsModule { }
