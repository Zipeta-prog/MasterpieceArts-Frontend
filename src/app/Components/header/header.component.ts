import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @ViewChild('next') nextDom!: ElementRef<HTMLButtonElement>;
  @ViewChild('prev') prevDom!: ElementRef<HTMLButtonElement>;
  @ViewChild('carousel') carouselDom!: ElementRef<HTMLDivElement>;
  @ViewChild('slider') sliderDom!: ElementRef<HTMLDivElement>;
  @ViewChild('thumbnailBorder') thumbnailBorderDom!: ElementRef<HTMLDivElement>;
  @ViewChild('time') timeDom!: ElementRef<HTMLDivElement>;

  timeRunning: number = 2000;
  timeAutoNext: number = 3000;

  ngOnInit(): void {
    this.thumbnailBorderDom.nativeElement.appendChild(this.thumbnailItemsDom[0]);
    this.runAutoSlider(); // Start auto sliding
    
    this.nextDom.nativeElement.addEventListener('click', () => this.showSlider('next'));
    this.prevDom.nativeElement.addEventListener('click', () => this.showSlider('prev'));
  }

  runTimeOut: any;
  runNextAutoProperty: any;
  autoSlideTimeout: any;

  get SliderItemsDom(): NodeListOf<Element> {
    return this.sliderDom.nativeElement.querySelectorAll('.carousel .list .item');
  }

  get thumbnailItemsDom(): NodeListOf<Element> {
    return this.thumbnailBorderDom.nativeElement.querySelectorAll('.carousel .thumbnail .item');
  }

  showSlider(type: string): void {
    if (type === 'next') {
      this.sliderDom.nativeElement.appendChild(this.SliderItemsDom[0]);
      this.thumbnailBorderDom.nativeElement.appendChild(this.thumbnailItemsDom[0]);
      this.carouselDom.nativeElement.classList.add('next');
    } else {
      this.sliderDom.nativeElement.prepend(this.SliderItemsDom[this.SliderItemsDom.length - 1]);
      this.thumbnailBorderDom.nativeElement.prepend(this.thumbnailItemsDom[this.thumbnailItemsDom.length - 1]);
      this.carouselDom.nativeElement.classList.add('prev');
    }

    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      this.carouselDom.nativeElement.classList.remove('next');
      this.carouselDom.nativeElement.classList.remove('prev');
    }, this.timeRunning);

    this.restartAutoSlide();
  }

  runAutoSlider(): void {
    this.autoSlideTimeout = setTimeout(() => {
      this.showSlider('next');
      this.runAutoSlider(); // Recursive call for continuous sliding
    }, this.timeAutoNext);
  }

  restartAutoSlide(): void {
    clearTimeout(this.autoSlideTimeout);
    this.runAutoSlider();
  }

  // Pause auto sliding when the user interacts with the carousel
  @HostListener('mouseenter')
  onMouseEnter(): void {
    clearTimeout(this.autoSlideTimeout);
  }

  // Resume auto sliding when the user leaves the carousel
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.runAutoSlider();
  }
}
