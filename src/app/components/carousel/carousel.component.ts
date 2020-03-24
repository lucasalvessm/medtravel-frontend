import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  showNavigationIndicators = false;
  showNavigationArrows = false;

  @Input()
  public image: string;

  constructor() { }

  ngOnInit() {
  }

}
