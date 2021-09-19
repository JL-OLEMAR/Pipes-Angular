import { Component } from '@angular/core'
import { Color, Heroe } from '../../interfaces/ventas.interfaces'

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayusculas: boolean = true
  ordenarPor: string= ''
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linter Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarMayusculas (): void {
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrder (valor: string): void {
    this.ordenarPor = valor
  }
}
