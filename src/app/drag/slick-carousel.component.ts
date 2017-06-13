import { Component, ElementRef, NgZone, Host, Directive } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'slick-carousel',
  template: `<ng-content></ng-content>`
})
export class SlickCarouselComponent {
  constructor(private el: ElementRef, private zone: NgZone) {
  }

 
  $carousel: $ | any;    

  initialized = false;

  initCarousel() {
    this.zone.runOutsideAngular(() => {
      this.$carousel = $(this.el.nativeElement).slick({});
    });
    this.initialized = true;
  }

  slides = [];

  addSlide(slide) {
    !this.initialized && this.initCarousel();
    this.slides.push(slide);
    this.$carousel.slick('slickAdd', slide.el.nativeElement);
  }

  removeSlide(slide) {
    const idx = this.slides.indexOf(slide);
    this.$carousel.slick('slickRemove', idx);
    this.slides = this.slides.filter(s => s != slide);
  }
}


@Directive({
  selector: '[slick-carousel-item]',
})
export class SlickCarouselItem {
  constructor(private el: ElementRef, @Host() private carousel: SlickCarouselComponent) {
  }
  ngAfterViewInit() {
    this.carousel.addSlide(this);
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
}

