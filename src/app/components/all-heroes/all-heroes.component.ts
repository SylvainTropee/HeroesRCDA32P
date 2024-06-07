import {Component} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: any[] //Array<any>

  constructor() {
    this.heroes = []
  }

  addHeroes() {
    this.heroes.push({name: "Batman"})
    this.heroes.push({name: "Wonder Woman"})
    this.heroes.push({name: "Hulk"})
  }
}
