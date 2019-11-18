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
    PortfolioCodeComponent
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
