import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-big-callto-action',
  templateUrl: './big-callto-action.component.html',
  styleUrls: ['./big-callto-action.component.css'],
  
  providers: [NgbCarouselConfig]
})
export class BigCalltoActionComponent implements OnInit {

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../assets/HERO1.jpeg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../assets/HERO1.jpeg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "../assets/HERO1.jpeg"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
