import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonButton ,IonButtons ,IonIcon } from '@ionic/angular/standalone';
import { AppAvisosComponent } from '../componentes/app-avisos/app-avisos.component';
import { addIcons } from 'ionicons';
import {settingsOutline}  from 'ionicons/icons'
import {RouterModule}  from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonIcon, IonButtons, IonButton, AppAvisosComponent, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
   addIcons({
    settingsOutline
   })
  }
}
