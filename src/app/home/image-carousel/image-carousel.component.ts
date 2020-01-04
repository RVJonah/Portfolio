import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ICarousel } from 'src/app/shared/carousel.model';
import { carouselAnimation } from 'src/app/animations/carousal-animation';
import { carouselTextAnimation } from 'src/app/animations/carousel-text-animation';


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [carouselAnimation, carouselTextAnimation]
})

export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() images: ICarousel[];
  imageElements: HTMLCollectionOf<Element>;
  currentImage: number;
  numberOfImages: number;
  interval: any;
  constructor() {
    this.currentImage = 0;
  }
  ngOnInit() {
    this.numberOfImages = this.images.length;
    this.images[this.currentImage].inView = true;
    this.interval = setInterval(() => {
      this.changePicture();
    }, 5000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
    this.images.forEach(image => image.inView = false);
  }
  changePicture() {
    if (this.currentImage + 1 === this.numberOfImages) {
      this.currentImage = 0;
      this.togglePicture(this.numberOfImages - 1, this.currentImage);
    } else {
      this.currentImage ++;
      this.togglePicture(this.currentImage - 1, this.currentImage);
    }
  }
  togglePicture(leaving, entering) {
    this.images[leaving].inView = false;
    this.images[entering].inView = true;
  }
  nextImage() {
    if (this.currentImage < this.numberOfImages - 1) {
      this.resetInterval();
      this.togglePicture(this.currentImage, this.currentImage + 1);
      this.currentImage ++;
    }
  }
  previousImage() {
    if (this.currentImage > 0) {
      this.resetInterval();
      this.togglePicture(this.currentImage, this.currentImage - 1);
      this.currentImage --;
    }
  }
  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.changePicture();
    }, 5000);
  }
}
