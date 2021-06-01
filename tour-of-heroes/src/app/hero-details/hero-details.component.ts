import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../core/model/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit() {
  }

}
