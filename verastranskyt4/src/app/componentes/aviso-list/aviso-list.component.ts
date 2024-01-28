import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {Aviso} from 'src/app/modelo/aviso';

@Component({
  selector: 'app-aviso-list',
  templateUrl: './aviso-list.component.html',
  styleUrls: ['./aviso-list.component.scss'],
  standalone: true,
  imports:[CommonModule]
  
})
export class AvisoListComponent  implements OnInit {


  @Input() avisos:Aviso[] = []
  aviso: any;


  constructor() { }

  ngOnInit() {}

}
