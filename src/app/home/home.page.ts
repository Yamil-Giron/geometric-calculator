import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonSelectOption, IonSelect, IonHeader, IonToolbar, IonTitle, IonContent, IonItem } from '@ionic/angular/standalone';
import { Circulo } from "../circulo/circulo.component";
import { Cuadrado } from '../cuadrado/cuadrado.component';
import { TrianguloEscaleno } from '../triangulo/triangulo.component';
import { TrianguloEquilatero } from '../trinagulo-equilatero/trinagulo-equilatero.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonSelectOption,
    IonSelect,
    FormsModule,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    Circulo,
    Cuadrado,
    TrianguloEquilatero,
    TrianguloEscaleno,
],
  standalone: true,
})
export class HomePage {
  seleccionadaFigura: string = '';

  seleccionFigura(figura: string) {
    this.seleccionadaFigura = figura;
    console.log('Figura seleccionada:', this.seleccionadaFigura)
  }
}
