import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi, single } from './data';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  imports: [NgxChartsModule, CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  multi: any[] = multi; // hier datentypen
  single: any[] = single;


  small_view:[number,number] = [500,300]
  medium_view: [number, number] = [700, 300]; // einstellung Größe , hier evtl verschiedene erstellen für unterschiedliche diagramme


  //allgmeine einstellung
  legend: boolean = true;
  showLabels: boolean = true; // <-- nicht sicher ob gebraucht , später prüfen wo es eingebunden wird beim ngxChart, in der HTML lauf vorlage nicht drin aber in der component.ts
  animations: boolean = true; // bemerke keine wirkliche animation , auch prüfen
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;

  // heat-map
  xAxisLabel: string = 'Country';
  yAxisLabel: string = 'Year';

  // Vertical-bar
  gradient: boolean = true;
  yAxisLabel_vertical: string = 'Country';
  xAxisLabel_vertical: string = 'Population';

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
}
