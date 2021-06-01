import { Component, OnInit } from '@angular/core';

import { HEROES } from '../core/model/mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; 

  constructor() { }

  ngOnInit(): void {
  }

}
