import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  imports: [CurrencyPipe],
  selector: 'app-tarjeta-producto',
  styleUrl: './tarjeta-producto.css',
  templateUrl: './tarjeta-producto.html',
})
export class TarjetaProducto {

  @Input() nombre: string= '';
  @Input() precio: number=0;
  @Input() disponible:boolean=true;

  @Output() productoAgregado = new EventEmitter<string>();

  agregarAlCarrito(){
    this.productoAgregado.emit(this.nombre);
  }


}
