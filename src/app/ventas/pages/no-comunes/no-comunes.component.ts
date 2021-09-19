import { Component } from '@angular/core'
import { interval } from 'rxjs'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // I18nSelect Pipe
  nombre: string = 'Pepito'
  genero: string = 'masculino'

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  // I18nPlural Pipe
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'José', 'Fernando', 'Sharon']

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.'
  }

  cambiarCliente (): void {
    this.nombre = 'Carla'
    this.genero = 'femenino'
  }

  borrarCliente (): void {
    this.clientes.pop()
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Pepito',
    edad: 20,
    direccion: 'Lima, Perú'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(5000) // 0,1,2,3,4,5,6... cada 5s

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 5000)
  })
}
