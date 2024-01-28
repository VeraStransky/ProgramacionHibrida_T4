import { Component, OnInit } from '@angular/core'
import { AvisoFormComponent } from '../aviso-form/aviso-form.component'
import { AvisoListComponent } from '../aviso-list/aviso-list.component'
import { AvisoService } from 'src/app/servicios/aviso.service'
import { Aviso } from 'src/app/modelo/aviso'


@Component({
  selector: 'app-avisos',
  templateUrl: './app-avisos.component.html',
  styleUrls: ['./app-avisos.component.scss'],
  standalone: true,
  imports: [AvisoFormComponent, AvisoListComponent]

})
export class AppAvisosComponent  implements OnInit {


  listaAvisos:Aviso[] = []



  constructor(
    private avisoService:AvisoService

  ) { }

  ngOnInit() {
    this.private_actualizar() 
  }

  private_actualizar() {
    this.listaAvisos = this.avisoService.getAvisos()
  }

  onCreateAvis($event: string) {
    const aviso = new Aviso($event)
    this.avisoService.agregarAviso(aviso)
    this.private_actualizar()
  }

}
