import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styles: [
  ]
})
export class AddCharacterComponent {
 @Output()
 public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public character:Character={
    name:'',
    power:0
  }

  emitCharacter():void{
   
    console.log(this.character);
    if (this.character.name!==''){
      this.onNewCharacter.emit(this.character);
     // this.limpiar();
    }
  }
  limpiar():void{
    this.character.name='';
    this.character.power=0
  }
}
