import { Component, Input } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CreateNewCardComponent } from "../create-new-card/create-new-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatTabsModule,
    CreateNewCardComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  resumeTemplates = [
    'https://d.novoresume.com/images/doc/creative-resume-template.png',
    'https://d.novoresume.com/images/doc/basic-resume-template.png',
    'https://d.novoresume.com/images/doc/combined-resume-template.png',
    'https://d.novoresume.com/images/doc/minimalist-resume-template.png',
    'https://d.novoresume.com/images/doc/hybrid-resume-template.png',
    'https://d.novoresume.com/images/doc/hybrid-resume-template.png',
    'https://d.novoresume.com/images/doc/traditional-resume-template.png',
    'https://d.novoresume.com/images/doc/general-resume-template.png',
  ];
}
