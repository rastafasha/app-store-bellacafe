import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/product.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { MessageService } from 'src/app/services/message.service';
// import * as io from "socket.io-client";

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slide-productos-h',
  templateUrl: './slide-productos-h.component.html',
  styleUrls: ['./slide-productos-h.component.css']
})
export class SlideProductosHComponent implements OnInit {

  public productos: any;
  public producto : any = {};
  public cantidad_to_cart = 1;
  public selector_to_cart = ' ';
  public err_stock ='';
  public color_to_cart = '#16537e';
  public precio_to_cart;
  public identity;
  public selector_error = false;
  // public socket = io('http://localhost:4201');

  public msm_error_review='';

  constructor(
    private productoService: ProductoService,
    private usuarioService : UsuarioService,
    private _carritoService : CarritoService,
    private messageService: MessageService,

    private router: Router
  ) {
    this.identity = this.usuarioService.usuario;
   }

  ngOnInit(): void {
    this.loadProducts();


  }
  loadProducts(){
    this.productoService.getProductos().subscribe(
      resp => {
        this.productos = resp;
        console.log(this.productos);
      }
    )
  }

  get_color(event,color){
    this.color_to_cart = color.color;


  }

  addToCart(){

    this.messageService.sendMessage(this.producto);
    console.log('sending...', this.producto)
  }

  close_alert(){
    this.msm_error_review = '';

  }

  close_toast(){
    $('#dark-toast').removeClass('show');
        $('#dark-toast').addClass('hide');
  }

}
