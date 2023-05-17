import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public title:string = 'Mi primera app de Angular';
  public counter:number=20;

  increaseBy(value:number):void{
    this.counter+=value;
  }

  resetear(value:number):void{
    this.counter=value;
  }
}
