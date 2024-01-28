import { Injectable } from '@angular/core';
import {Aviso} from '../modelo/aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  private _avisos:Aviso[] = [
    new Aviso("Tiempo Libre", "Descripcion aviso 1", Date.now()),
    new Aviso("Hogar", "Descripcion aviso 2", Date.now()),
    new Aviso("Vehiculos", "Descripcion aviso 3", Date.now()),
    new Aviso("Mascotas", "Descripcion aviso 4", Date.now()),
    new Aviso("Utilidad Publica", "Descripcion aviso 5", Date.now()),

  ];

  constructor() { }

  getAvisos():Aviso[] {
    return this._avisos
  }

  agregarAviso(aviso: Aviso) {
    this._avisos.push(aviso)
  }
  

}
