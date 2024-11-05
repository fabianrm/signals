import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  counter = signal(10);
  squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update(current => current + value);
  }

  decreaseBy(value: number) {
    this.counter.update(current => current - value);
  }



}
