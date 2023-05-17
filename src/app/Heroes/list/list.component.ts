import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public aHeroes:string[]=['Spiderman', "Ironman", "Hulk"];
  public deletedHeroe?:string;

  delHeroe():void{
     this.deletedHeroe= this.aHeroes.pop()
  }
}
