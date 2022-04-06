import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { Categoria } from 'src/app/models/categoria.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoria: Categoria;
  public categoriaSeleccionado: Categoria;

  constructor(
    private http: HttpClient,
    private location: Location,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    handler: HttpBackend
    ) {
      this.http = new HttpClient(handler);
      this.categoria = categoryService.categoria;
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) => this.cargarCategory(id));
    window.scrollTo(0, 0);
  }

  cargarCategory(id: string){

    if(id === 'nuevo'){
      return;
    }

    this.categoryService.getCategoriaById(id)
    .pipe(
      // delay(100)
      )
      .subscribe( categoria =>{
      if(!categoria){
        return this.router.navigateByUrl(`/app/`);
      }

        const { icono, nombre, state_banner, subcategorias } = categoria;
        this.categoriaSeleccionado = categoria;

        console.log(this.categoriaSeleccionado);
      });

  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
