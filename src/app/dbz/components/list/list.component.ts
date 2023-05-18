import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  @Input()
  public aListCharacter:Character[]=[
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?:string):void{
    if (!id)return;
    this.onDelete.emit(id)
  }
}
