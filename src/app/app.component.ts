import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
 
  
}
