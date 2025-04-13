import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonButton, IonItem, IonInput, IonContent, IonCard, IonImg } from '@ionic/angular/standalone';
import { FiguraGeometrica } from '../figura-geometrica/figura-geometrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonImg, IonCard,  IonButton, IonItem, IonInput, IonContent, CommonModule, FormsModule],
  standalone: true,
})
export class TrianguloEscaleno extends FiguraGeometrica {
  public ladoA: number = 0;
  public ladoB: number = 0;
  public ladoC: number = 0;
  public perimetro: number = 0;
  constructor() {
    super('Triángulo Escaleno');
  }
  calcularPerimetro(): number {
    this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    return this.perimetro
  }
}

