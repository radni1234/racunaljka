import { Component } from '@angular/core';

@Component({
  selector: 'app-energent',
  templateUrl: './energent.component.html'
})
export class EnergentComponent {
  kolicina: number = 0;
  energent: number = 1;


  energentChanged(number: number){
    console.log(number);
    this.energent = number;

}

}
