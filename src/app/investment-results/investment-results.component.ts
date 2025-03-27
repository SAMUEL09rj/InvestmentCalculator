import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.servic';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
private investmentservice=inject(InvestmentService);

get results(){
  return this.investmentservice.resultsData;
}
}
