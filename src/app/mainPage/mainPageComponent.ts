import {Component} from '@angular/core';
import {PIZZAS} from "../mocks/pizzas";

@Component({
  selector: 'main-page',
  templateUrl: 'mainPageComponent.html',
  styleUrls: ['mainPageComponent.css']
})
export class MainPageComponent {
  pizzaArray = PIZZAS;
  localSum = 0;

  changePizzaCount(index: number, isIncrement: boolean) {
    let localSum = 0;

    if (isIncrement) {
      this.pizzaArray[index].count++;
    } else if (this.pizzaArray[index].count !== 0) {
      this.pizzaArray[index].count--;
    }
    this.pizzaArray.forEach(function (pizza) {
      if (pizza.count !== 0) {
        localSum += pizza.price * pizza.count;
      }
    });
    this.localSum = localSum;
  }
}
