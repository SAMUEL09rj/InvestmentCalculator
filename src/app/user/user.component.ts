import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.servic';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  enteredInitial='0';
  enteredAnnual='0';
  enteredExpected='5';
  enteredDuration='10';
  constructor(private investmentservice:InvestmentService){}
  OnSubmit(){
    this.investmentservice.calculateInvestmentResults({
      initialInvestment:+this.enteredInitial,
      annualInvestment:+this.enteredAnnual,
      expectedReturn:+this.enteredExpected,
      duration:+this.enteredDuration,
    })
  }
 
}
