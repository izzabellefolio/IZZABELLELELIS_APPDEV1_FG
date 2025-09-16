import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products = [
    { id: 1, name: "Air Force 1 Low", price: 100, stock: 2},
    { id: 2, name: "Air Max 270", price: 600, stock: 3 },
    { id: 3, name: "Dunk Low Retro", price: 500, stock: 6},
    { id: 4, name: "Ultraboost 23", price: 800, stock: 4},
    { id: 4, name: "Under Armour", price: 1000, stock: 5}
  ];

  cartTotalItems: number = 0;
  cartTotalPrice: number = 0;
  cartIngredients: string = '';

    productName: string = '';
    productNum: number = 0;
    orderIngredients: string = '';

    updateOrderDetails(newName: string, newNum: number, newIngredients: string) {
      this.productName = newName;
      this.productNum = Number(newNum);
      this.orderIngredients = newIngredients;
    }

  addToCart(product: any) {
    if (product.stock > 0) {
      this.cartTotalItems++;
      this.cartTotalPrice += product.price;
      product.stock--;
      this.cartIngredients += product.name + ', ';
    }
    else if (product.stock <= 0) {
      alert('Sorry, this product is out of stock.');
    }
  };

  productId!: number;
  product: any = {};
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
  clearCart() {
    this.cartTotalItems = 0;
    this.cartTotalPrice = 0;
    this.cartIngredients = '';
  }
}
