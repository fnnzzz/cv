import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvContainerComponent } from './cv-container/cv-container.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { SkillsComponent } from './skills/skills.component';
import { TopBioComponent } from './top-bio/top-bio.component';
import { TopProjectsComponent } from './top-projects/top-projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    CvContainerComponent,
    GeneralInfoComponent,
    SkillsComponent,
    TopBioComponent,
    TopProjectsComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
