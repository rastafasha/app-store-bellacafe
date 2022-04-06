import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage.service';
import {CartItemModel} from '../../models/cart-item-model';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItem: CartItemModel;

  cartItems=[];
  total= 0;

  constructor(
    private http: HttpClient,
    private location: Location,
    private messageService: MessageService,
    private storageService: StorageService,
    handler: HttpBackend) {
      this.http = new HttpClient(handler);
     }

  ngOnInit(): void {
    if(this.storageService.existCart()){
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
    console.log(this.cartItems);
    console.log(this.getTotal());
    window.scrollTo(0,0);
  }

   getItem():void{
    this.messageService.getMessage().subscribe((producto:Producto)=>{
      let exists = false;
      this.cartItems.forEach(item =>{
        if(item.productId === producto._id){
          exists = true;
          item.qty++;
        }
      });
      if(!exists){
        const cartItem = new CartItemModel(producto);
        this.cartItems.push(cartItem);

      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);

    });
  }

  getTotal():number{
    let total =  0;
    this.cartItems.forEach(item => {
      total += item.qty * item.productPrice;
    });
    return +total.toFixed(2);
  }

  emptyCart():void{
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deletItem(i:number):void{
    if(this.cartItems[i].qty > 1){
      this.cartItems[i].qty--;

    }else{
      this.cartItems.splice(i, 1);
    }
    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
