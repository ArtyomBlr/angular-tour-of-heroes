import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/model/hero.model';

import { HEROES } from '../core/model/mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; 
  selectedHero?: Hero;

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
