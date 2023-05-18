import { Component } from '@angular/core';

import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {
  constructor(private _dbzService:DbzService){}

  get characters():Character[]{
    return [...this._dbzService.aCharacters]
  }

  onDeleteCharacter(id:string):void{
    this._dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this._dbzService.addCharacter(character);
  }
}
