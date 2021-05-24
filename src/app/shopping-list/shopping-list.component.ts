import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/Ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('tomato', 10)
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}