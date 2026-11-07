import { Component,Input,Output,EventEmitter} from '@angular/core';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
@Component({
  imports: [TarjetaProducto],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  @Input() productos: any[]= [];
  

  @Output() productoAgregado = new EventEmitter<string>();

  onProductoAgregado(nombre:string){
    this.productoAgregado.emit(nombre);
  }
}
