import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './Hero/components/hero.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})
export class HeroModule { }
