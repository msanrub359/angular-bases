import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='Iroman';
  public age:number = 45;

  get capitalizedName():string{
    return 'Hola Mundo'.toLocaleLowerCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name='Spiderman';
  }
  changeAge():void{
    this.age=56;
  }
  reset():void{
    this.name="Iroman";
    this.age=45;
  }
}
