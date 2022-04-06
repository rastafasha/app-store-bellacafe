import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductoService } from 'src/app/services/product.service';
import { Producto } from 'src/app/models/producto.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';


const base_url = environment.baseUrl;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductoService],

})
export class ProductComponent implements OnInit {


  public producto: Producto;

  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp: any = null;
  public file :File;
  public imgSelect : String | ArrayBuffer;
  public productoSeleccionado: Producto;

  // producto$!: Observable<Producto>;
   // error: string;

   constructor(
     private http: HttpClient,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
    private usuarioService: UsuarioService,
    handler: HttpBackend,
    ) {
      this.http = new HttpClient(handler);
      this.usuario = usuarioService.usuario;
      this.producto = productoService.producto;
     }

  ngOnInit(){

    this.activatedRoute.params.subscribe( ({id}) => this.cargarProducto(id));
    window.scrollTo(0, 0);


    }


    cargarProducto(_id: string){

      if(_id === 'nuevo'){
        return;
      }

      this.productoService.getProductoById(_id)
      .pipe(
        // delay(100)
        )
        .subscribe( producto =>{
        if(!producto){
          return this.router.navigateByUrl(`/app/product`);
        }

          const { titulo, precio_antes,info_short,detalle, stock,categoria,subcategoria,
            nombre_selector,marca,video_review,precio_ahora, img } = producto;
          this.productoSeleccionado = producto;

          console.log(this.productoSeleccionado);
        });

    }








  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
