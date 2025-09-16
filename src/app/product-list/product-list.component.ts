import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { id: 1, name: "Air Force 1 Low", price: 100, stock: 2},
    { id: 2, name: "Air Max 270", price: 600, stock: 3 },
    { id: 3, name: "Dunk Low Retro", price: 500, stock: 6},
    { id: 4, name: "Ultraboost 23", price: 800, stock: 4},
    { id: 4, name: "Under Armour", price: 1000, stock: 5}
  ];

  searchTerm: string = '';
   filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  cartTotalItems: number = 0;
  cartTotalPrice: number = 0;
  cartIngredients: string = '';

    orderName: string = '';
    orderNum: number = 0;
    orderIngredients: string = '';

    updateOrderDetails(newName: string, newNum: number, newIngredients: string) {
      this.orderName = newName;
      this.orderNum = Number(newNum);
      this.orderIngredients = newIngredients;
    }

  addToCart(product: any) {
    if (product.stock > 0) {
      this.cartTotalItems++;
      this.cartTotalPrice += product.price;
      product.stock--;
      this.cartIngredients += product.name + ', ';
    }
  };
}
