import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    {path: 'assets/images/mock-photo-1.jpg'},
    {path: 'assets/images/mock-photo-2.jpg'},
    {path: 'assets/images/mock-photo-3.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
