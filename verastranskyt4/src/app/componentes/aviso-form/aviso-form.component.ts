import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'; 

@Component({
  selector: 'app-aviso-form',
  templateUrl: './aviso-form.component.html',
  styleUrls: ['./aviso-form.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class AvisoFormComponent  implements OnInit {

  avisoStr:string =""

  @Output() onCreate = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.onCreate.emit(this.avisoStr)

  }

}
