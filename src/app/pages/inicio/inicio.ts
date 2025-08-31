import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {

  index = 0;

  ngOnInit() {
    this.showSlide(this.index);
    setInterval(() => {
      this.nextSlide();
    }, 200000);
  }

  showSlide(n: number) {
    const slides = document.querySelectorAll<HTMLElement>('.slide');
    slides.forEach((slide, i) => {
      slide.style.display = (i === n) ? 'block' : 'none';
    });
  }

  nextSlide() {
    const slides = document.querySelectorAll<HTMLElement>('.slide');
    this.index = (this.index + 1) % slides.length;
    this.showSlide(this.index);
  }

  prevSlide() {
    const slides = document.querySelectorAll<HTMLElement>('.slide');
    this.index = (this.index - 1 + slides.length) % slides.length;
    this.showSlide(this.index);
  }
}
