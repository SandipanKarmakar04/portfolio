import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'education',component:EducationComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'about',component:AboutComponent},
    
];
