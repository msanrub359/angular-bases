import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuidv4 } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public aCharacters:Character[]=[{
    id:uuidv4(),
    name:'Krillin',
    power:1000
  },
  {
    id:uuidv4(),
    name:'Goku',
    power:9500
  }
  ]

  addCharacter(character:Character):void{
   const newCharacter:Character={id:uuidv4(),...character}
      this.aCharacters.push(newCharacter)
  }
  // onDeleteCharacter(index:number):void{
  //   this.aCharacters.splice(index,1);
  // }
  deleteCharacterById(id:string){
    this.aCharacters=this.aCharacters.filter(character=>character.id!==id)
  }
  constructor() { }
}
